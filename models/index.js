const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = {};

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}

fs.readdirSync(__dirname)
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );

        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* const GenreModel = require("./genre.model");
const UserModel = require("./user.model");
const MovieModel = require("./movie.model");
const SeriesModel = require("./series.model");
const UserOrdersModel = require("./userorders.model");

const generateTables = async () => {
    await UserModel.sync();
    await GenreModel.sync();
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
 */
