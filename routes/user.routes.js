const express = require("express");
const router = express.Router();

const UserController = require("../controller/user.controller");

router.get("/", UserController.getAll);
router.get("/:id", UserController.getOneById);
router.get("/:name", UserController.getOneByName);
router.get("/:email", UserController.getOneByEmail);
router.get("/:dateBirth", UserController.getOneByDateBirth);
router.get("/:subscribed", UserController.getOneBySubscribed);
router.get("/:isAdmin", UserController.getOneByIsAdmin);

module.exports = router;
