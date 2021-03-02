const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    RegionSchema = new Schema({
    title: {
        type        : String,
        required    : true
    }
});

module.exports = mongoose.model('Region', RegionSchema);
