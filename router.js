const express = require("express");

const router = express.Router();

const GenreRoutes = require("./routes/genre.routes");
const UserRoutes = require("./routes/user.routes");
const UserOrdersRoutes = require("./routes/userorders.routes");
const SerieRoutes = require("./routes/serie.routes");
const MovieRoutes = require("./routes/movie.routes");

router.use("/genre", GenreRoutes);
router.use("/user", UserRoutes);
router.use("/userorders", UserOrdersRoutes);
router.use("/serie", SerieRoutes);
router.use("/movie", MovieRoutes);

module.exports = router;
