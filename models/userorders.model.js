const { DataTypes, Model } = require("sequelize");
const MovieModel = require("./movie.model");
const SeriesModel = require("./series.model");
const UserModel = require("./user.model");
const sequelize = require("../db/db");

class UserOrders extends Model {}

UserOrders.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: UserModel,
                key: "id",
            },
            allowNull: false,
        },
        movieId: {
            type: DataTypes.INTEGER,
            references: {
                model: MovieModel,
                key: "id",
            },
            allowNull: false,
        },
        seriesId: {
            type: DataTypes.INTEGER,
            references: {
                model: SeriesModel,
                key: "id",
            },
            allowNull: false,
        },
    },
    {
        sequelize,
        model: "UserOrders",
        freezeTableName: true,
    }
);

module.exports = UserOrders;
