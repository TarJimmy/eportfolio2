const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    LanguageSchema = new Schema({
        title: {
            type        : String,
            required    : true
        },
        level: {
            type        : String,
            enum        : ['base','intermediaire', 'avancé'],
            required    : true
        },
        type: [{
            type        : String,
            enum        : ['front-end', 'back-end', 'logiciel'],
            required    : true
        }], //Web, logiciel ...
        image: {
            type        : String,
            required    : false
        },
        stars: {
            type        : Number,
            required    : false
        },
        description: {
            type        : String,
            required    : false
        }
    });
//Differents niveau
//base : Vue en cours ou/et dans differents projets scolaires
//intermediaire: Aie minimum 2/3 projets avec ce languages ou experience en entreprise
//avancé: plusieurs années d'expériences
module.exports = mongoose.model('Language', LanguageSchema);
