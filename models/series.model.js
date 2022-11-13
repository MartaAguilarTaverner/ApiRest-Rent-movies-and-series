const { DataTypes, Model, STRING, TEXT, NUMBER } = require("sequelize");
const GenreModel = require("./genre.model");
const sequelize = require("../db/db");

class Series extends Model {}

Series.init(
    {
        title: {
            type: DataTypes.STRING,
            require: true,
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
            type: STRING,
            allowNull: false,
        },
        minage: {
            type: DataTypes.INTEGER,
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
        seasons: {
            type: DataTypes.INTEGER,
        },
        episodes: {
            type: DataTypes.INTEGER,
        },
        Rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nextEpisodeDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cinemaPasses: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        theaterPasses: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        model: "Series",
        freezeTableName: true,
    }
);

module.exports = Series;
