const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    AwardSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
});

module.exports = mongoose.model('Award', AwardSchema);
