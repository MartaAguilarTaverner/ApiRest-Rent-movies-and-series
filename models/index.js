const GenreModel = require("./genre.model");
const UserModel = require("./user.model");
const MovieModel = require("./movie.model");
const SeriesModel = require("./series.model");
const UserOrdersModel = require("./userorders.model");

const generateTables = async () => {
    await GenreModel.sync();
    await UserModel.sync();
    await MovieModel.sync();
    await SeriesModel.sync();
    await UserOrdersModel.sync();
};

module.exports = {
    GenreModel,
    UserModel,
    MovieModel,
    SeriesModel,
    UserOrdersModel,
    generateTables,
};
