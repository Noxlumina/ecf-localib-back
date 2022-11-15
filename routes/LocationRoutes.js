const express = require("express");
const locationModel = require("../models/location");
const app = express();

app.get("/locations", async (request, response) => {
  const locations = await locationModel.find({});
  console.log("route get all locations");

  try {
    response.send(locations);
    console.log(locations);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/location/:id", async (request, response) => {
  const location = await locationModel.findOne({_id:request.params.id});
  console.log("route get one");

  try {
    response.send(location);
    console.log(location);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.post("/location", async (request, response) => {
    const location = new locationModel(request.body);
  
    try {
      await location.save();
      response.send(location);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
  // ...

app.patch("/location/patch/:id", async (request, response) => {
    try {
      await locationModel.findByIdAndUpdate({_id:request.params.id}, request.body);
      await locationModel.save();
      response.send(location);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
// ...

app.delete("/locations/delete/:id", async (request, response) => {
    try {
      const location = await locationModel.findByIdAndDelete({_id:request.params.id});
      
      if (!location) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
  // ...
module.exports = app;