const express = require("express");
const router = express.Router();

const UserController = require("../controller/user.controller");

router.get("/", UserController.getAll);
router.get("/:id", UserController.getOneById);
router.get("/:name", UserController.getOneByName);
router.get("/:email", UserController.getOneByEmail);
router.get("/allSubscribed", UserController.getAllUserSubcribed);
router.get("/allAdmin", UserController.getAllUserAdmin);

router.post("/login", UserController.login);

module.exports = router;
