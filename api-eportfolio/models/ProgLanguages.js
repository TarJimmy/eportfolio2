const mongoose = require('mongoose');

const ProgLanguageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum : ['base','intermediaire', 'avancé'],
    required: true
  },
  type: String, //Web, logiciel ...
});

module.export = mongoose.model('ProgLanguage', ProgLanguageSchema);
