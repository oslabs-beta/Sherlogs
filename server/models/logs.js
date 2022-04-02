const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  message: {
    type: String,
    text: true,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  isBackend: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = mongoose.model('log', logSchema);
