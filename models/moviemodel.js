const { DataTypes, Model, STRING, TEXT, NUMBER } = require("sequelize");
const sequelize = require("../db/db");

Movies.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        minLenght: 1,
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        /*         type: DataTypes.STRING,
        default: () => crypto.randomUUID(),
        unique: true, */
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
});

class Movie extends Model {}
