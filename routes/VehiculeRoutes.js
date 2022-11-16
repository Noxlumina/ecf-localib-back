const express = require("express");
const vehiculeModel = require("../models/vehicule");
const router = express.Router();
//creation du CRUD pour un véhicule
/*
*voie get sur véhicule permettant de récupérer tous les véhicules
*/
router.get("/vehicules", async (request, response) => {
  const vehicules = await vehiculeModel.find({});
  console.log("route get all vehicules");
  try {
    response.send(vehicules);
    console.log(vehicules);
  } catch (error) {
    response.status(500).send(error);
  }
});
/*
*voie get sur véhicule permettant de récupérer un véhicule en fonction de son id
*/
router.get("/vehicules/:id", async (request, response) => {
  const vehicule = await vehiculeModel.findOne({_id:request.params.id});
  console.log("route get one vehicule");
  try {
    response.send(vehicule);
    console.log(vehicule);
  } catch (error) {
    response.status(500).send(error);
  }
});
/*
*voie get sur véhicule permettant de récupérer un véhicule en fonction de son id
*/
router.get("/immat/:immatriculation", async (request, response) => {
  const vehicule = await vehiculeModel.findOne({immatriculation:request.params.immatriculation });
  console.log("route get one vehicule");
  try {
    response.send(vehicule);
    console.log(vehicule);
  } catch (error) {
    response.status(500).send(error);
  }
});
/*
*voie post sur véhicule permettant de créer un véhicule 
*/
router.post("/vehicules", async (request, response) => {
    const vehicule = new vehiculeModel(request.body);
  
    try {
      await vehicule.save();
      response.send(vehicule);
      response.status(201).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
/*
*voie patch sur véhicule permettant de update un véhicule 
*/
router.patch("/vehicules/:id", async (request, response) => {
    try {
      await vehiculeModel.findByIdAndUpdate({_id:request.params.id}, request.body);
      await vehiculeModel.save();
      response.send(vehicule);
    } catch (error) {
      response.status(500).send(error);
    }
  });
/*
*voie delete sur véhicule permettant de supprimer un véhicule 
*/
router.delete("/vehicules/:id", async (request, response) => {
    try {
      const vehicule = await vehiculeModel.findByIdAndDelete({_id:request.params.id});
      
      if (!vehicule) response.status(204).send("No item found");
      response.status(410).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
module.exports = router;