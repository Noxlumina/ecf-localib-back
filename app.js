const express = require("express");
const locataireRouter = require("./routes/locataireRoutes.js");
const vehiculeRouter = require("./routes/vehiculeRoutes.js");
const locationRouter = require("./routes/locationRoutes.js");
//initialisation de express
let app = express();
app.use(express.json());

//utilisation des différents routers crées
app.use(locataireRouter);
app.use(vehiculeRouter);
app.use(locationRouter);

module.exports = app;
