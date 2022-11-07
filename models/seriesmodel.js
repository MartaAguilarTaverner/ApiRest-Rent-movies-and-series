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
        allowNull: false,
    },
    year: DataTypes.NUMBER,
    director: {
        type: STRING,
        allowNull: false,
    },
    minage: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
