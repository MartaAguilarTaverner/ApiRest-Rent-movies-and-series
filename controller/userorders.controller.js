const db = require('../models');
const userOrder = db.userorder;

const UserOrdersController = {};

UserOrdersController.getAll = async (req, res) => {
    try {
        const response = await userOrder.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the user watchs',
        });
    }
};
UserOrdersController.watchMovie = async (req, res) => {
    try {
        const body = req.body;

        const movieId = body.movieId;
        const userId = body.userId;

        const response = await userOrder.create({ userId, movieId });

        res.send({ id: response.id });
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while recording the watch of the user',
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
            message: error.message || 'Some error ocurred while recording the watch of the user',
        });
    }
};

UserOrdersController.modifyWatch = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const userWatchObj = {};

        Object.keys(body).forEach((property) => {
            userWatchObj[property] = body[property];
        });
        const result = await userOrder.update(userWatchObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while modifying a user view, please check everything is alright or try again after few minutes',
        });
    }
};

UserOrdersController.getAllByUserId = async (req, res) => {
    try {
        const userId = req.params.userid;

        const response = await userOrder.findAll({ where: { userId } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving all the orders of that user',
        });
    }
};

module.exports = UserOrdersController;
