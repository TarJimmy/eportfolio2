const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ProProjectSchema = new Schema({
        projectId: {
            type        : Schema.Types.ObjectId,
            ref         : 'Project',
            required    : true
        },
        companyId: {
            type        :   Schema.Types.ObjectId,
            ref         :   'Company',
            required    :   true
        }
    })

module.exports = mongoose.model('ProProject', ProProjectSchema);
