const mongoose = require("mongoose");

//model du véhicule
const VehiculeSchema = new mongoose.Schema({
    immatriculation: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 9,
        maxlength:9
    },
    marque: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }, 
    modele: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    etat: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    prix: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
    },
    disponibilite: {
        type: Boolean,
        required: true,
        trim: true,
        lowercase: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    photo: {
        type:String
    }
});



const Vehicule = mongoose.model("Vehicule", VehiculeSchema,"Vehicules");

module.exports = Vehicule;