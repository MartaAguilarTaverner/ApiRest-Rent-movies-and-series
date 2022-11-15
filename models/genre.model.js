const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Genre extends Model {
        static associate(models) {
            this.hasMany(models.movie, {
                foreignKey: "genreId",
            });

            this.hasMany(models.serie, {
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
            modelName: "genre",
            tableName: "genre",
        }
    );

    return Genre;
};
