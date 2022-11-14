const { Model } = require("sequelize");
const GenreModel = require("./genre.model");

module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
            this.hasMany(models.UserOrders, {
                foreignKey: "movieId",
            });

            Movie.belongsTo(models.Genre, {
                foreignKey: "genreId",
            });
        }
    }

    Movie.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                minLenght: 1,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            year: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            director: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            genreId: {
                type: DataTypes.INTEGER,
                references: {
                    model: GenreModel,
                    key: "id",
                },
                allowNull: false,
            },
            rating: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            minAge: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Movie",
        }
    );

    return Movie;
};
