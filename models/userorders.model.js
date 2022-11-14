const { Model } = require("sequelize");
const MovieModel = require("./movie.model");
const SeriesModel = require("./series.model");
const UserModel = require("./user.model");

module.exports = (sequelize, DataTypes) => {
    class UserOrders extends Model {
        static associate(models) {
            UserOrders.belongsTo(models.User, {
                foreignKey: "genreId",
            });

            UserOrders.belongsTo(models.Movie, {
                foreignKey: "movieId",
            });

            UserOrders.belongsTo(models.Series, {
                foreignKey: "seriesId",
            });
        }
    }

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
            },
            seriesId: {
                type: DataTypes.INTEGER,
                references: {
                    model: SeriesModel,
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "UserOrders",
        }
    );

    return UserOrders;
};
