const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Config = require('../config');
const Routes = require('./routes');
const app = express();

app.set('view engine', Config.views.engine);
app.set('views', Config.views.path);

app.use(
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
);

app.use('/static', express.static(path.resolve(__dirname, '..', 'public')));

app.use('/', Routes.Home);

module.exports = app;
