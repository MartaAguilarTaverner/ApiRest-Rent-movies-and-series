const express = require("express");

const router = express.Router();

const GenreRoutes = require("./routes/genre.routes");

router.use("/genre", GenreRoutes);

module.exports = router;
