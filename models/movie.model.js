const { DataTypes, Model } = require("sequelize");
const GenreModel = require("./genre.model");
const sequelize = require("../db/db");

class Movie extends Model {}

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
        model: "Movie",
        freezeTableName: true,
    }
);

module.exports = Movie;
