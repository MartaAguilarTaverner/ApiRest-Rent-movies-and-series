const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Genre extends Model {
        static associate(models) {
            this.hasMany(models.Movie, {
                foreignKey: "genreId",
            });

            this.hasMany(models.Series, {
                foreignKey: "genreId",
            });
        }
    }

    Genre.init(
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                minLength: 1,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Genre",
        }
    );

    return Genre;
};
