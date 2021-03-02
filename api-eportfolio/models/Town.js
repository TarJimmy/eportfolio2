const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TownSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    departmentId: {
        type: Schema.Types.ObjectId,
        ref:  'Department',
        required: true
    }
});

module.exports = mongoose.model('Town', TownSchema)
