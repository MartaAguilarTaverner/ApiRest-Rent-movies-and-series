const express = require("express");
const app = express();
const router = require("./router");
const PORT = 3030;
app.use(express.json());

app.use(router);
ç;
app.listen(PORT, () => {
    `Servidor Corriendo en el puerto ${PORT}`;
});
