const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SchoolProjectSchema = new Schema({
    nbMembers: {
        type        : Schema.Types.Number,
        required    : true
    },
    projectId: {
        type        : Schema.Types.ObjectId,
        ref         : 'Project',
        required    : true
    },
    formationId: {
        type        :   Schema.Types.ObjectId,
        ref         :   'Formation',
        required    :   true
    }
});

module.exports = mongoose.model('SchoolProject', SchoolProjectSchema);
