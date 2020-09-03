const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  name: String,
  password: String,
});

mongoose.model('User', UserShema);