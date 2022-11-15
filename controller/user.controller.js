const UserController = {};

UserController.getAll = async (req, res) => {
    try {
        const response = await user.findAll();

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving series",
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
                error.message || "Some error ocurred while retrieving series",
        });
    }
};
