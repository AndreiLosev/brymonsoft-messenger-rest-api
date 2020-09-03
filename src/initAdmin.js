const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');
const app = express();
config.express(app);
config.routes(app);
const {User} = require('./app/controllers/users')

mongoose.connect(
  config.app.mongoUri,
  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => {
    User.create({name: 'admin11', password: 'admin11'}, (err, admin) => {
      console.log(',.,.,..,')
      if (err) return console.log("errror: ", err)
      console.log('create Admin: ', admin, 'press ctrl + C')
    })
  })
