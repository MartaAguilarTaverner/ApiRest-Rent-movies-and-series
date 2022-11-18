const db = require("../models");
const userOrder = db.userorder;

const UserOrdersController = {};

UserOrdersController.watchMovie = async (req, res) => {
    try {
        const body = req.body;

        const movieId = body.movieId;
        const userId = body.userId;

        const response = await userOrder.create({ userId, movieId });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserOrdersController.watchSerie = async (req, res) => {
    try {
        const body = req.body;

        const serieId = body.serieId;
        const userId = body.userId;

        const response = await userOrder.create({ userId, serieId });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

module.exports = UserOrdersController;
