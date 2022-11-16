const express = require("express");
const locataireRouter = require("./routes/locataireRoutes.js");
const vehiculeRouter = require("./routes/vehiculeRoutes.js");
const locationRouter = require("./routes/locationRoutes.js");
//initialisation de express
let app = express();
app.use(express.json());

//permettant les connection cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//utilisation des différents routers crées
app.use(locataireRouter);
app.use(vehiculeRouter);
app.use(locationRouter);

module.exports = app;
