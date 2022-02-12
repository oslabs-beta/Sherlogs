const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    log: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('log', logSchema);