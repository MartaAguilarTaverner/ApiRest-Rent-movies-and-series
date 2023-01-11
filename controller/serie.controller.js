const { Op } = require('sequelize');
const db = require('../models');
const serie = db.serie;
const genre = db.genre;

const SerieController = {};

//Read Functions of Serie CRUD
SerieController.getAll = async (req, res) => {
    try {
        const response = await serie.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving series',
        });
    }
};

SerieController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await serie.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving a serie',
        });
    }
};

SerieController.getOneByTitle = async (req, res) => {
    try {
        const title = req.query.name;

        const response = await serie.findOne({
            where: { title: { [Op.substring]: title } },
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the serie with that name',
        });
    }
};

SerieController.getAllByYear = async (req, res) => {
    try {
        const year = req.params.year;

        const response = await serie.findAll({ where: { year } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the series of that year',
        });
    }
};

SerieController.getAllByDirector = async (req, res) => {
    try {
        const director = req.query.name;

        const response = await serie.findAll({
            where: { director: { [Op.substring]: director } },
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the series of that director',
        });
    }
};

SerieController.getAllByMinAge = async (req, res) => {
    try {
        const minAge = req.params.minage;

        const response = await serie.findAll({ where: { minAge } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the series available for that age',
        });
    }
};

SerieController.getTopRating = async (req, res) => {
    try {
        const response = await serie.findAll({
            order: [['rating', 'DESC']],
            limit: 6,
        });

        const topRatingSeries = response.map((serie) => ({
            id: serie.id,
            title: serie.title,
            rating: serie.rating,
            imgURL: serie.imgURL,
        }));

        res.send(topRatingSeries);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the top rating series',
        });
    }
};

SerieController.getAllByCinemaPasses = async (req, res) => {
    try {
        const response = await serie.findAll({ where: { cinemaPasses: true } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the series with cinema passes',
        });
    }
};

SerieController.getAllByTheaterPasses = async (req, res) => {
    try {
        const response = await serie.findAll({
            where: { theaterPasses: true },
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the series with theater passes',
        });
    }
};

SerieController.getAllByGenre = async (req, res) => {
    try {
        const genreid = req.params.genreid;

        const response = await serie.findAll({
            where: { genreid },
            include: genre,
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the series of that genre',
        });
    }
};

SerieController.getAllNextWeekEpisode = async (req, res) => {
    try {
        const nextWeekDate = new Date();
        nextWeekDate.setDate(new Date().getDate() + 7);

        const response = await serie.findAll({
            where: {
                nextEpisodeDate: {
                    [Op.between]: [new Date(), nextWeekDate],
                },
            },
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || 'Some error ocurred while retrieving the series with next episode available next week',
        });
    }
};

module.exports = SerieController;
