const mongoose = require('mongoose');

const RegionSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Region', RegionSchema);
