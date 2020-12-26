const mongoose = require('mongoose');

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  nbMembers: Number,
  AwardId: {
    type: Schema.ObjectId,
  },
  StartTime: Date,
  EndTime: Date,
  ProgLanguage: [{
    ProgLanguageId: {
      type: Schema.Types.ObjectId,
      ref: 'ProgLanguage',
      required: true
    }
  }]
});

module.exports = mongoose.model('Project', ProjectSchema);
