const express = require("express");
const locataireRouter = require("./routes/locataireRoutes.js");
const vehiculeRouter = require("./routes/vehiculeRoutes.js");
const locationRouter = require("./routes/locationRoutes.js");
//initialisation de express
let app = express();
app.use(express.json());

//connection à la base de donnée avec mongoose une surcouche à MongoDB
// mongoose.connect(
//     connectionString,
//     {
//       useNewUrlParser: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
//     }
//   )
//   //si connection réussi message en console
//   .then((ans) => { console.log("connection à la base de donnée") })
//   //si échec message en console
//   .catch((err) => { console.log("erreur dans la tentative de connection") });

//utilisation des différents routers crées
app.use(locataireRouter);
app.use(vehiculeRouter);
app.use(locationRouter);

module.exports = app;
