const connectionString = "mongodb+srv://Localib:Localib@localib.88i6cko.mongodb.net/Localib?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const app = require("./app.js");
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

//connection sur le port localhost 5000, message en console de commande
app.listen(5000, () => {
  console.log("Server is running...");
});
