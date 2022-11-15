const connectionString = "mongodb+srv://Localib:Localib@localib.88i6cko.mongodb.net/Localib?retryWrites=true&w=majority";
const express = require("express");
const mongoose = require("mongoose");
const locataireRouter = require("./routes/locataireRoutes.js");
const vehiculeRouter = require("./routes/vehiculeRoutes.js");
const locationRouter = require("./routes/locationRoutes.js");

//initialisation de express
const app = express();
app.use(express.json());

//connection à la base de donnée avec mongoose une surcouche à MongoDB
mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)
//si connection réussi message en console
.then((ans) => { console.log("connection à la base de donnée") })
//si échec message en console
.catch((err) => { console.log("erreur dans la tentative de connection") });

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

//connection sur le port localhost 5000, message en console de commande
app.listen(5000, () => {
  console.log("Server is running...");
});