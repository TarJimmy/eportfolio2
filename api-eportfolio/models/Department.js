const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    DepartmentSchema = new Schema({
        title: {
            type        : String,
            required    : true
        },
        RegionId: {
            type        : Schema.Types.ObjectId,
            ref         :  'Region',
            required    : true
        },
        number: {
            type        : Number,
            required    : true
        }
});

module.exports = mongoose.model('Department', DepartmentSchema)
