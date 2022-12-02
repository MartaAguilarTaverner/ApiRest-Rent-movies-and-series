module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("movie", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                minLenght: 1,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            director: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            genreId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "genre",
                    key: "id",
                },
                allowNull: false,
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            rating: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            minAge: {
                type: Sequelize.INTEGER,
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
            imgURL: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("movie");
    },
};
