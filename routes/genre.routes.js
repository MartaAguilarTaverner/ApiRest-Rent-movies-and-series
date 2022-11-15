const express = require("express");
const router = express.Router();

const GenreController = require("../controller/genre.controller");

router.get("/", GenreController.getAll);

router.get("/:id", GenreController.getOneById);

module.exports = router;
