const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  type: String,
  image: String
});

module.exports = mongoose.model('users', userSchema);