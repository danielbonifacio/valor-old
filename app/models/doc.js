const mongoose = require('mongoose');

const DocsSchema = new mongoose.Schema({
  route: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  page: {
    title: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model('Docs', DocsSchema);
