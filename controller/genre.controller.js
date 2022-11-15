const db = require("../models");
const genre = db.genre;

const GenreController = {};

GenreController.getAll = async (req, res) => {
    try {
        const response = await genre.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving genres",
        });
    }
};

GenreController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await genre.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving genres",
        });
    }
};

module.exports = GenreController;
