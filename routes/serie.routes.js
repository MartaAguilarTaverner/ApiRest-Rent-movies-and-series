const express = require("express");
const router = express.Router();

const SerieController = require("../controller/serie.controller");

router.get("/", SerieController.getAll);
router.get("/:id", SerieController.getOneById);
router.get("/:title", SerieController.getOneByTitle);
router.get("/:year", SerieController.getOneByYear);
router.get("/:director", SerieController.getOneByDirector);
router.get("/:minAge", SerieController.getOneByMinAge);
router.get("/:rating", SerieController.getOneByRating);
router.get("/:cinemaPasses", SerieController.getOneByCinemaPasses);
router.get("/:theaterPasses", SerieController.getOneByTheaterPasses);

module.exports = router;
