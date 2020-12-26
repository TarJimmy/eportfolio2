const mongoose = require('mongoose');

const TownSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  idDepartment: {
    type: Schema.type.ObjectId,
    ref:  'Department',
    required: true
  }
});

module.exports = mongoose.model('Town', TownSchema)
