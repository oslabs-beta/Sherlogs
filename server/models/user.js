const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxLength: 25,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 16,
  },
});

//validation function (password requirements)
//refactor to throw an error instead of returning 
// userSchema.methods.passwordIsCorrectLength = async function(password){
//   const user = this;
//   return password.length >= 8 && password.length <= 16
// }

// userSchema.methods.usernameIsCorrectLength = async function(username){
//     const user = this; 
//     return username.length <= 25
// }

userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

//refactor: only hashing should be here (line 42), rest should be in controller 
userSchema.pre(
    'save',
    async function(next){
        const user = this;
        // if(!this.passwordIsCorrectLength(this.password)) return false;
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    }
)

module.exports = mongoose.model('user', userSchema);
