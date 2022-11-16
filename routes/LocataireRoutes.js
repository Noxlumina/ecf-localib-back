const express = require("express");
const { ObjectId } = require("mongodb");
const locataireModel = require("../models/locataire");
const router = express.Router();

//creation du CRUD pour un locataire
/*
 *voie get sur locataire permettant de récupérer tous les locataires
 */
router.get("/locataires", async (request, response) => {
  const locataires = await locataireModel.find({});
  console.log("route get all vehicules");
  try {
    response.send(locataires);
    console.log(locataires);
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
/*
 *voie get sur locataire permettant de récupérer un locataire en fonction de son id
 */
router.get("/locataires/:id", async (request, response) => {
  if (request.params.id.length == 24) {
    const locataire = await locataireModel.findOne({ _id: request.params.id });
    console.log("route get one");
    try {
      response.send(locataire);
      console.log(locataire);
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  } else {
    response.status(204).send("No item found");
  }
});
/*
 *voie post sur locataire permettant de créer un locataire
 */
router.post("/locataires", async (request, response) => {
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
router.patch("/locataires/:id", async (request, response) => {
  try {
    await locataireModel.findByIdAndUpdate(
      { _id: request.params.id },
      request.body
    );
    await locataireModel.save();
    response.send(locataire);
    response.status(301).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
/*
 *voie delete sur locataire permettant de supprimer un locataire
 */
router.delete("/locataires/:id", async (request, response) => {
  try {
    const locataire = await locataireModel.findByIdAndDelete({
      _id: request.params.id,
    });

    if (!locataire) response.status(204).send("No item found")
    else
      response.status(410).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
