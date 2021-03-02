const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    SiteVersionSchema = new Schema({
    backAdmin: {
        type: Schema.Types.Boolean,
        required: true
    },
    opinionOthers: {
        type: Schema.Types.Boolean,
        required: true
    }
});

module.exports = mongoose.model('SiteVersion', SiteVersionSchema)
