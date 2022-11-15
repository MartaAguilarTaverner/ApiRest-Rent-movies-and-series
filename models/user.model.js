const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.userorder, {
                foreignKey: "userId",
            });
        }
    }

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
            subscribed: DataTypes.BOOLEAN,
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "user",
            tableName: "user",
        }
    );

    return User;
};
