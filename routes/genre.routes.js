const express = require("express");
const AuthController = require("../controller/auth.controllers");
const GenreController = require("../controller/genre.controller");

const router = express.Router();

router.get("/", AuthController.authenticateToken, GenreController.getAll);

router.get(
    "/:id",
    AuthController.authenticateToken,
    GenreController.getOneById
);

module.exports = router;
