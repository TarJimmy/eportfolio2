const mongoose = require('mongoose');

const AwardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: String
});

module.export = mongoose.model('Award', Schema);
