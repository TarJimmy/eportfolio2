const mongoose = require('mongoose');

const FormationSchema = new Schema({
  institution:  {
    type: String,
    required: true
  },
  TownId: {
    type: Schema.type.ObjectId,
    ref:  'Town',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum : ['obtenu','non obtenu', 'en cours'],
    required: true
  },
  StartDate: {
    type: Date,
    required: true
  },
  EndDate: {
    type: Date
  }
});

module.exports = mongoose.model('Formation', FormationSchema)
