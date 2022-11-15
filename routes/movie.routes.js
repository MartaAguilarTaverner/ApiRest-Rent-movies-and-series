const express = require("express");
const router = express.Router();

const MovieController = require("../controller/movie.controller");

router.get("/", MovieController.getAll);
router.get("/:id", MovieController.getOneById);
router.get("/:title", MovieController.getOneByTitle);
router.get("/:year", MovieController.getOneByYear);
router.get("/:director", MovieController.getOneByDirector);
router.get("/:minAge", MovieController.getOneByMinAge);
router.get("/:rating", MovieController.getOneByRating);

module.exports = router;
