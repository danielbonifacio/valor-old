const express = require('express');
const bodyParser = require('body-parser');
const Config = require('../config');
const Routes = require('./routes');
const app = express();

app.set('view engine', Config.views.engine);
app.set('views', Config.views.path);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', Routes.Home);

module.exports = app;
