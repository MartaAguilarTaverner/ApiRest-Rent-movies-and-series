const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Genre extends Model {}

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
        model: "Genre",
        freezeTableName: true,
    }
);

module.exports = Genre;
