const mongoose = require("mongoose");

//model d'une locatiion
const LocationSchema = new mongoose.Schema({
    vehicule: {
      type: mongoose.Schema.Types.Object,
      ref: 'Vehicule',
      required: true,
      trim: true,
  },
    locataire: {
      type: mongoose.Schema.Types.Object,
      ref: 'Locataire',
      required: true,
      trim: true,
  },
    date_de_debut: {
        type: Date,
      //  required: true,
        trim: true,
    },
    date_de_fin: {
        type: Date,
      //  required: true,
        trim: true,
    },
    prix: {
        type: Number, 
      //  required: true,
        trim: true,
    }
});

const Location = mongoose.model("Location", LocationSchema, "Locations");

module.exports = Location;
