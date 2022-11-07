const { DataTypes, Model, STRING, TEXT, NUMBER } = require("sequelize");
const sequelize = require("../db/db");

UserOrders.init({
    movies: {
        type: DataTypes.STRING,
        allowNull: false,
        minLenght: 1,
    },
    series: {
        type: DataTypes.STRING,
        minLenght: 1,
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        unique: true,
        /* type: DataTypes.STRING,
        default: () => crypto.randomUUID(),
        unique: true */
    },
    min_age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
});

class UserOrders extends Model {}
