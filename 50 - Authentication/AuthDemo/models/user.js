const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username cannot be blank']
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank']
  }
})


// statics allows you to define methods to be applied to the entire User class, not just instances of the User class
userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username })
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
}


module.exports = mongoose.model('User', userSchema)