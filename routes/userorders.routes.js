const express = require("express");

const AuthController = require("../controller/auth.controllers");
const UserOrdersController = require("../controller/userorders.controller");

const router = express.Router();

router.get("/", AuthController.authenticateToken, UserOrdersController.getAll);
router.get(
    "/listuser/:userid",
    AuthController.authenticateToken,
    UserOrdersController.getAllByUserId
);

router.post(
    "/movie",
    AuthController.authenticateToken,
    UserOrdersController.watchMovie
);
router.post(
    "/serie",
    AuthController.authenticateToken,
    UserOrdersController.watchSerie
);

router.put(
    "/:id",
    AuthController.authenticateToken,
    UserOrdersController.modifyWatch
);

module.exports = router;
