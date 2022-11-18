const db = require("../models");
const user = db.user;

const UserController = {};

//Read Functions of Serie CRUD
UserController.getAll = async (req, res) => {
    try {
        const response = await user.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.getOneById = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await user.findByPk(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.getOneByName = async (req, res) => {
    try {
        const name = req.params.name;

        const response = await user.findOne({ where: { name } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.getOneByEmail = async (req, res) => {
    try {
        const email = req.params.email;

        const response = await user.findOne({ where: { email } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.getAllUserSubcribed = async (req, res) => {
    try {
        const response = await user.findAll({ where: { subscribed: true } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.getAllUserAdmin = async (req, res) => {
    try {
        const response = await user.findAll({ where: { isAdmin: true } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.login = async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        const password = body.password;

        const result = await user.findOne({ where: { email } });

        if (result && password === result.password) {
            const user = {
                id: result.id,
                name: result.name,
                email: result.email,
                isAdmin: result.isAdmin,
                subscribed: result.subscribed,
            };

            res.send(user);
        } else {
            throw new Error("No user registered with those credentials");
        }
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

module.exports = UserController;
