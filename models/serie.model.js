const { Model } = require("sequelize");
const GenreModel = require("./genre.model");

module.exports = (sequelize, DataTypes) => {
    class Serie extends Model {
        static associate(models) {
            this.hasMany(models.userorder, {
                foreignKey: "serieId",
            });

            Serie.belongsTo(models.genre, {
                foreignKey: "genreId",
            });
        }
    }

    Serie.init(
        {
            title: {
                type: DataTypes.STRING,
                require: true,
                unique: true,
                minLenght: 1,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            year: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            director: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            minAge: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            genreId: {
                type: DataTypes.INTEGER,
                references: {
                    model: GenreModel,
                    key: "id",
                },
                allowNull: false,
            },
            seasons: {
                type: DataTypes.INTEGER,
            },
            episodes: {
                type: DataTypes.INTEGER,
            },
            rating: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            nextEpisodeDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            cinemaPasses: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            theaterPasses: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "serie",
            tableName: "serie",
        }
    );

    return Serie;
};
