const express = require("express");
const router = express.Router();

const UserController = require("../controller/user.controller");

router.get("/", UserController.getAll);

router.get("/:id", UserController.getOneById);

module.exports = router;
