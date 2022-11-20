const express = require("express");
const AuthController = require("../controller/auth.controllers");
const UserController = require("../controller/user.controller");

const router = express.Router();

router.get("/", AuthController.authenticateToken, UserController.getAll);
router.get(
    "/allsubscribed",
    AuthController.authenticateToken,
    UserController.getAllUserSubcribed
);
router.get(
    "/alladmin",
    AuthController.authenticateToken,
    UserController.getAllUserAdmin
);

router.get("/:id", AuthController.authenticateToken, UserController.getOneById);
router.get(
    "/:name",
    AuthController.authenticateToken,
    UserController.getOneByName
);
router.get(
    "/:email",
    AuthController.authenticateToken,
    UserController.getOneByEmail
);

router.post("/", UserController.register);
router.post("/login", UserController.login);

router.put("/:id", AuthController.authenticateToken, UserController.modifyUser);

router.delete(
    "/:id",
    AuthController.authenticateToken,
    UserController.deleteUser
);

module.exports = router;
