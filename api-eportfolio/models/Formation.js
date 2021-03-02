const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    FormationSchema = new Schema({
        institution:  {
            type        : String,
            required    : true
        },
        title: {
            type        : String,
            required    : true
        },
        status: {
            type        : String,
            enum        : ['obtenu','non obtenu', 'en cours'],
            required    : true
        },
        townId: {
            type        : Schema.Types.ObjectId,
            ref         :  'Town',
            required    : true
        },
        startDate: {
            type        : Date,
            required    : true
        },
        endDate: {
            type        : Date,
            required    : false
        },
        image: {
            type        : String,
            required    : false
        }
    });

module.exports = mongoose.model('Formation', FormationSchema);
