const express = require("express");

const router = require("./router");
const sequelize = require("./db/db");
const Models = require("./models");
const Seeds = require("./seeders");

const initDB = async () => {
    try {
        await sequelize.authenticate();

        await Models.generateTables();

        Seeds.generateSeeds();
    } catch (error) {
        console.error("Error Trace: ", error);
    }
};

// initDB();

const app = express();
const PORT = 3001;
app.use(express.json());

// app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
    initDB();
});
