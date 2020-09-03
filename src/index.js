const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');
const app = express();
config.express(app);
config.routes(app);

mongoose.connect(
  config.app.mongoUri,
  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => app.listen(config.app.appProt,
    () => console.log(`App listening on port ${config.app.appProt}!`),
  ),
).catch(err => console.log(`Error conntectiong to mongo ${config.app.mongoUri}`, err)); 
