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

UserController.getOneByDateBirth = async (req, res) => {
    try {
        const dateBirth = req.params.dateBirth;

        const response = await user.findOne({ where: { dateBirth } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.getOneBySubscribed = async (req, res) => {
    try {
        const subscribed = req.params.subscribed;

        const response = await user.findOne({ where: { subscribed } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};

UserController.getOneByIsAdmin = async (req, res) => {
    try {
        const isAdmin = req.params.isAdmin;

        const response = await user.findOne({ where: { isAdmin } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving users",
        });
    }
};
