const { Op } = require('sequelize');
const db = require('../models');
const movie = db.movie;

const MovieController = {};
const genre = db.genre;

//Read Functions of Serie CRUD
MovieController.getAll = async (req, res) => {
    try {
        const response = await movie.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving movies',
        });
    }
};

MovieController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await movie.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving a movie',
        });
    }
};

MovieController.getAllByTitle = async (req, res) => {
    try {
        const title = req.query.name;

        const response = await movie.findAll({
            where: { title: { [Op.substring]: title } },
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the title of a movie',
        });
    }
};

MovieController.getAllByYear = async (req, res) => {
    try {
        const year = req.params.year;

        const response = await movie.findAll({ where: { year } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the movies of this year',
        });
    }
};

MovieController.getAllByDirector = async (req, res) => {
    try {
        const director = req.query.name;

        const response = await movie.findAll({
            where: { director: { [Op.substring]: director } },
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the movies of that director',
        });
    }
};

MovieController.getAllByMinAge = async (req, res) => {
    try {
        const minAge = req.params.minAge;

        const response = await movie.findAll({ where: { minAge } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the movies availables for that age',
        });
    }
};

MovieController.getTopRating = async (req, res) => {
    try {
        const response = await movie.findAll({
            order: [['rating', 'DESC']],
            limit: 6,
        });

        const topRatingMovies = response.map((movie) => ({
            id: movie.id,
            title: movie.title,
            rating: movie.rating,
            imgURL: movie.imgURL,
        }));

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving the top rating movies',
        });
    }
};

MovieController.getAllByGenre = async (req, res) => {
    try {
        const genreid = req.params.genreid;
        const response = await movie.findAll({
            where: { genreid },
            include: genre,
        });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the movies of that genre',
        });
    }
};

module.exports = MovieController;
