const GenresSeed = require("./genres.seed");
const SeriesSeed = require("./series.seed");
const MoviesSeed = require("./movies.seed");
// const UserOrdersSeed = require('./userOrders.seed');
const { GenreModel, SeriesModel, MovieModel } = require("../models");

const generateSeeds = async () => {
    const genreIsFilled = await GenreModel.findOne();

    if (!genreIsFilled) {
        GenresSeed.create();
    }

    const seriesIsFilled = await SeriesModel.findOne();

    if (!seriesIsFilled) {
        SeriesSeed.create();
    }

    const moviesIsFilled = await MovieModel.findOne();

    if (!moviesIsFilled) {
        MoviesSeed.create();
    }
};

module.exports = {
    generateSeeds,
};
