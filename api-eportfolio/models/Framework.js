const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    FrameworkSchema = new Schema({
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
        }],
        languageId: {
            type        :  Schema.Types.ObjectId,
            ref         : 'Language',
            required    : true
        },
        image: {
            type        : String,
            required    : false
        }
    });

module.exports = mongoose.model('Framework', FrameworkSchema);
