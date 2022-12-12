const { Model } = require("sequelize");
const MovieModel = require("./movie.model");
const SerieModel = require("./serie.model");
const UserModel = require("./user.model");

module.exports = (sequelize, DataTypes) => {
    class UserOrder extends Model {
        static associate(models) {
            UserOrder.belongsTo(models.user, {
                foreignKey: "userId",
            });

            UserOrder.belongsTo(models.movie, {
                foreignKey: "movieId",
            });

            UserOrder.belongsTo(models.serie, {
                foreignKey: "serieId",
            });
        }
    }

    UserOrder.init(
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
            serieId: {
                type: DataTypes.INTEGER,
                references: {
                    model: SerieModel,
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "userorder",
            tableName: "userorder",
        }
    );

    return UserOrder;
};
