const MovieController = {};

//Read Functions of Serie CRUD
MovieController.getAll = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await movie.findAll(id);

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving movies",
        });
    }
};

MovieController.getOneById = async (req, res) => {
    try {
        const response = await movie.findByPk();
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving movies",
        });
    }
};

MovieController.getOneByTitle = async (req, res) => {
    try {
        const title = req.params.title;

        const response = await movie.findOne({ where: { title } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving movies",
        });
    }
};

MovieController.getOneByYear = async (req, res) => {
    try {
        const year = req.params.year;

        const response = await movie.findOne({ where: { year } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving movies",
        });
    }
};

MovieController.getOneByDirector = async (req, res) => {
    try {
        const director = req.params.director;

        const response = await movie.findOne({ where: { director } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving movies",
        });
    }
};

MovieController.getOneByMinAge = async (req, res) => {
    try {
        const minAge = req.params.minAge;

        const response = await movie.findOne({ where: { minAge } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving movies",
        });
    }
};

MovieController.getOneByRating = async (req, res) => {
    try {
        const rating = req.params.rating;

        const response = await movie.findOne({ where: { rating } });

        res.send(response);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error ocurred while retrieving movies",
        });
    }
};
