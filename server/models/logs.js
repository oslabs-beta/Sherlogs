const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true,
    // default: Date.now
  },
});

module.exports = mongoose.model('log', logSchema);

