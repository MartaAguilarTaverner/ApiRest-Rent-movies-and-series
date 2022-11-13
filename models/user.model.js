const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            require: true,
            allowNull: false,
            minLenght: 5,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        dateBirth: DataTypes.DATE,
        active: DataTypes.BOOLEAN,
    },
    {
        sequelize,
        model: "User",
        freezeTableName: true,
    }
);

module.exports = User;
