const express = require("express");
const locataireModel = require("../models/locataire");
const app = express();

//creation du CRUD pour un locataire


/*
*voie get sur locataire permettant de récupérer tous les locataires
*/
app.get("/locataires", async (request, response) => {
  const locataires = await locataireModel.find({});
  console.log("route get all vehicules");

  try {
    response.send(locataires);
    console.log(locataires);
  } catch (error) {
    response.status(500).send(error);
  }
});

/*
*voie get sur locataire permettant de récupérer un locataire en fonction de son id
*/
app.get("/locataires/:id", async (request, response) => {
  const locataire = await locataireModel.findOne({_id:request.params.id});
  console.log("route get one");
  try {
    response.send(locataire);
    console.log(locataire);
  } catch (error) {
    response.status(500).send(error);
  }
});

/*
*voie post sur locataire permettant de créer un locataire 
*/
app.post("/locataires", async (request, response) => {
    const locataire = new locataireModel(request.body);
  
    try {
      await locataire.save();
      response.send(locataire);
    } catch (error) {
      response.status(500).send(error);
    }
  });

/*
*voie patch sur locataire permettant de update un locataire 
*/
app.patch("/locataires/:id", async (request, response) => {
    try {
      await locataireModel.findByIdAndUpdate({_id:request.params.id}, request.body);
      await locataireModel.save();
      response.send(locataire);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  

/*
*voie delete sur locataire permettant de supprimer un locataire 
*/
app.delete("/locataires/:id", async (request, response) => {
    try {
      const locataire = await locataireModel.findByIdAndDelete({_id:request.params.id});
      
      if (!locataire) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
module.exports = app;