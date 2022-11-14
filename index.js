const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const logger = require("./config/winston");
const db = require("./db/db");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("combined", { stream: logger.stream }));
app.use(express.json());

// app.use(router);

db.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Corriendo en el puerto ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
});
