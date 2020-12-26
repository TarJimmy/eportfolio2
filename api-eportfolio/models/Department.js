const mongoose = require('mongoose');

const DepartmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  RegionId: {
    type: Schema.type.ObjectId,
    ref:  'Region',
    required: true
  }
});

module.exports = mongoose.model('Department', DepartmentSchema)
