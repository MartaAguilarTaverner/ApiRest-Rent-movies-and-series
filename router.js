const express = require("express");

const router = express.Router();

const GenreRoutes = require("./routes/genre.routes");
const UserRoutes = require("./routes/user.routes");
const UserOrdersRoutes = require("./routes/userorders.routes");

router.use("/genre", GenreRoutes);
router.use("/user", UserRoutes);
router.use("/userorders", UserOrdersRoutes);

module.exports = router;
