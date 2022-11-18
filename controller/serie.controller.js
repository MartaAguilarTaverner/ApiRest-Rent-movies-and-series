const db = require("../models");
const serie = db.serie;

const SerieController = {};

//Read Functions of Serie CRUD
SerieController.getAll = async (req, res) => {
    try {
        const response = await serie.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
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
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};

SerieController.getOneByTitle = async (req, res) => {
    try {
        const title = req.params.title;

        const response = await serie.findOne({ where: { title } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};

SerieController.getOneByYear = async (req, res) => {
    try {
        const year = req.params.year;

        const response = await serie.findOne({ where: { year } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};

SerieController.getOneByDirector = async (req, res) => {
    try {
        const director = req.params.director;

        const response = await serie.findOne({ where: { director } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};

SerieController.getOneByMinAge = async (req, res) => {
    try {
        const minAge = req.params.minAge;

        const response = await serie.findOne({ where: { minAge } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};

SerieController.getOneByRating = async (req, res) => {
    try {
        const rating = req.params.rating;

        const response = await serie.findOne({ where: { rating } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};

SerieController.getOneByCinemaPasses = async (req, res) => {
    try {
        const cinemaPasses = req.params.cinemaPasses;

        const response = await serie.findOne({ where: { cinemaPasses } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};

SerieController.getOneByTheaterPasses = async (req, res) => {
    try {
        const theaterPasses = req.params.theaterPasses;

        const response = await serie.findOne({ where: { theaterPasses } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
        });
    }
};
