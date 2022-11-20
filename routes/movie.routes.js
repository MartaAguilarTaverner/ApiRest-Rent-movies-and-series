const express = require("express");
const AuthController = require("../controller/auth.controllers");
const MovieController = require("../controller/movie.controller");

const router = express.Router();

router.get("/", AuthController.authenticateToken, MovieController.getAll);
router.get(
    "/:id(\\d+$)",
    AuthController.authenticateToken,
    MovieController.getOneById
);
router.get(
    "/title",
    AuthController.authenticateToken,
    MovieController.getAllByTitle
);
router.get(
    "/year/:year",
    AuthController.authenticateToken,
    MovieController.getAllByYear
);
router.get(
    "/director",
    AuthController.authenticateToken,
    MovieController.getAllByDirector
);
router.get(
    "/minage/:minAge",
    AuthController.authenticateToken,
    MovieController.getAllByMinAge
);
router.get(
    "/toprating",
    AuthController.authenticateToken,
    MovieController.getTopRating
);
router.get(
    "/genre/:genreid",
    AuthController.authenticateToken,
    MovieController.getAllByGenre
);

module.exports = router;
