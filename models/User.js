// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
 user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
 
});

module.exports = User = mongoose.model('User', UserSchema);