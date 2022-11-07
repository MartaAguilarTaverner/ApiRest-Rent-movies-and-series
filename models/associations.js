const { DataTypes, Model, STRING, TEXT, NUMBER } = require("sequelize");
const sequelize = require("../db/db");

Series.init({
    title: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        minLenght: 1,
    },
    uuid: {
        type: DataTypes.STRING,
        default: () => crypto.randomUUID(),
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        require: true,
    },
    year: DataTypes.NUMBER,
    director: {
        type: STRING,
        require: true,
    },
    minage: {
        type: DataTypes.INTEGER,
        require: true,
    },
    genre: {
        principal_genre: {
            type: DataTypes.STRING,
        },
        secondary_genre: {
            type: DataTypes.STRING,
        },
        third_genre: {
            type: DataTypes.STRING,
        },
    },
    seasons: {
        type: DataTypes.NUMBER,
    },
    episodes: {
        type: DataTypes.NUMBER,
    },
});

class Series extends Model {}
