const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  name: String,
  password: String,
  avatar: String,
  phone: String,
});

mongoose.model('User', UserShema);