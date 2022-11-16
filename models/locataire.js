const mongoose = require("mongoose");

//model du locataire
const LocataireSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    prenom: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        // required: true,
        trim: true,
        lowercase: true,
    }
});

const Locataire = mongoose.model("Locataire", LocataireSchema,"Locataires");

module.exports = Locataire;
