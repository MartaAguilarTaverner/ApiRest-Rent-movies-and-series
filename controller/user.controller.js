const db = require('../models');
const AuthController = require('./auth.controllers');
const user = db.user;

const UserController = {};

/* Read Functions of the CRUD, to allow the admin the ability of
searching users by different personal data. To get the list of all users
with all the data, search by id, name and email, get a list of subscribed 
users, list of all the admin, one at the moment.. */
UserController.getAll = async (req, res) => {
    try {
        const response = await user.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving users',
        });
    }
};

UserController.getAllUserSubcribed = async (req, res) => {
    try {
        const response = await user.findAll({ where: { subscribed: true } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving subscribed users',
        });
    }
};

UserController.getAllUserAdmin = async (req, res) => {
    try {
        const response = await user.findAll({ where: { isAdmin: true } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while retrieving admin users',
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
            message: error.message || 'Some error ocurred while retrieving the user',
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
            message: error.message || 'Some error ocurred while retrieving a user with that name',
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
            message: error.message || 'Some error ocurred while retrieving a user by that email',
        });
    }
};

//Login
UserController.login = async (req, res) => {
    try {
        const body = req.body;
        const email = body.email;
        const password = body.password;

        const result = await user.findOne({ where: { email } });

        if (result && password === result.password) {
            const token = AuthController.generateAccessToken(email);

            const userInfo = {
                id: result.id,
                name: result.name,
                email: result.email,
                isAdmin: result.isAdmin,
                subscribed: result.subscribed,
                token,
            };

            res.send(userInfo);
        } else {
            throw new Error('No user registered with those credentials');
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error ocurred while trying to access, please try again after few minutes',
        });
    }
};

//Register
UserController.register = async (req, res) => {
    try {
        const body = req.body;
        const userObj = {
            name: body.name,
            dateBirth: body.dateBirth,
            email: body.email,
            password: body.password,
            isAdmin: false,
            subscribed: false,
        };

        const result = await user.create(userObj);

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while trying to make the registration, please check everything is alright or try again after few minutes',
        });
    }
};

//Modification User
UserController.modifyUser = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const userObj = {};

        Object.keys(body).forEach((property) => {
            userObj[property] = body[property];
        });

        const result = await user.update(userObj, { where: { id } });

        res.send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while modifying a user, please check everything is alright or try again few minutes later',
        });
    }
};

//Delete User
UserController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await user.destroy({ where: { id } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message ||
                'Some error ocurred while deleting a user, please check everything is alright or try again few minutes later',
        });
    }
};

module.exports = UserController;
