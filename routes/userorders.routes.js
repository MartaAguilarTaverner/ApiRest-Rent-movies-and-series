const express = require("express");
const router = express.Router();

const UserOrdersController = require("../controller/userorders.controller");

router.post("/movie", UserOrdersController.watchMovie);
router.post("/serie", UserOrdersController.watchSerie);

module.exports = router;
