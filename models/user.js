const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  type: String,
  image: string
});

mongoose.model('users', userSchema);