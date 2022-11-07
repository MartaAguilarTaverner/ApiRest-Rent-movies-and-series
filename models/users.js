const { DataTypes, Model, STRING, TEXT, NUMBER } = require("sequelize");
const sequelize = require("../db/db");

User.init({
    name: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
        minLenght: 5,
    },
    uuid: {
        type: DataTypes.STRING,
        default: () => crypto.randomUUID(),
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        require: true,
    },
    age: DataTypes.RANGE(DataTypes.DATE),
    Order: {},
});

class Series extends Model {}
