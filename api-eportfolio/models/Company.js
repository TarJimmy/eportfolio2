const mongoose = require('mongoose'),
    Schema  = mongoose.Schema,
    CompanySchema  =   new Schema({
        title: {
            type        : String,
            required    : true
        },
        linkEntreprise: {
            type        : String,
            required    : false
        },
        metier: {
            type        : String,
            required    : false
        },
        shortMetier: {
            type        : String,
            required    : true
        },
        townId: {
            type        : Schema.Types.ObjectId,
            ref         : 'Town',
            required    : true
        },
        logo: {
            type        : String,
            required    : false
        }
    });

module.exports = mongoose.model('Company', CompanySchema);
