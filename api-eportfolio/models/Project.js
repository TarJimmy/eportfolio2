const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ProjectSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        description: String,
        awardId: {
            type        : Schema.Types.ObjectId,
            ref         : 'Award',
            required    : false
        },
        languages: [{
            type        : mongoose.Schema.Types.ObjectId,
            ref         : 'Language',
        }],
        frameworks: [{
            type        : mongoose.Schema.Types.ObjectId,
            ref         : 'Framework',
        }],
        ranking: {
            type        :   Number,
            required    :   false
        },
        client: {
            type        :   String,
            required    :   false
        },
        github: {
            type        :   String,
            required    :   false
        },
        startDate: {
            type        : String,
            required    : true
        },
        endDate: {
            type        : String,
            required    : false
        },
        type: {
            type        : String,
            enum        : ['school', 'pro', 'perso'],
            required    : true
        }
});

module.exports = mongoose.model('Project', ProjectSchema);
