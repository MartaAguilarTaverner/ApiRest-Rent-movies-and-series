const { GenreModel } = require("../models");

module.exports = {
    create: async () => {
        await GenreModel.bulkCreate(
            [
                {
                    name: "Horror",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Adventure",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Drama",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Action",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Fantasy",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Crime",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Romance",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Comedy",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Thriller",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Animation",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Sci-Fi",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },
};
