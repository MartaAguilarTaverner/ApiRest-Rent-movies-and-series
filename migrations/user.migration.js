module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("user", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                require: true,
                allowNull: false,
                minLenght: 5,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isAdmin: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            dateBirth: Sequelize.DATE,
            subscribed: Sequelize.BOOLEAN,
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("user");
    },
};
