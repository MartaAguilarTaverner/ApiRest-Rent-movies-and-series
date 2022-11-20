const express = require("express");
const AuthController = require("../controller/auth.controllers");
const SerieController = require("../controller/serie.controller");

const router = express.Router();

router.get("/", AuthController.authenticateToken, SerieController.getAll);
router.get(
    "/:id(\\d+$)",
    AuthController.authenticateToken,
    SerieController.getOneById
);
router.get(
    "/title",
    AuthController.authenticateToken,
    SerieController.getOneByTitle
);
router.get(
    "/year/:year",
    AuthController.authenticateToken,
    SerieController.getAllByYear
);
router.get(
    "/director",
    AuthController.authenticateToken,
    SerieController.getAllByDirector
);
router.get(
    "/minage/:minage",
    AuthController.authenticateToken,
    SerieController.getAllByMinAge
);
router.get(
    "/toprating",
    AuthController.authenticateToken,
    SerieController.getTopRating
);
router.get(
    "/cinemapasses",
    AuthController.authenticateToken,
    SerieController.getAllByCinemaPasses
);
router.get(
    "/theaterpasses",
    AuthController.authenticateToken,
    SerieController.getAllByTheaterPasses
);
router.get(
    "/genre/:genreid",
    AuthController.authenticateToken,
    SerieController.getAllByGenre
);
router.get(
    "/nextweekepisode",
    AuthController.authenticateToken,
    SerieController.getAllNextWeekEpisode
);

module.exports = router;
