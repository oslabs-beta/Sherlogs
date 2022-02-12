const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxLength: 25,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 16
    }
})

module.exports = mongoose.model('user', userSchema);