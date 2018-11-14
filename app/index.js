'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Config = require('@config');
const Routes = require('@routes');
const Route = require('@core/Route');
const Web = require('@routes/web');
const hbs = require('@core/Handlebars');
const app = express();

// app settings
app.engine('hbs', hbs.engine);

app.set('view engine', Config.views.engine);
app.set('views', Config.views.path);

app.use(
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
);

// Serves `public` folder as static
app.use('/static', express.static(path.resolve(__dirname, '..', 'public')));

/**
 * Base routes
 * This is just prefix of common route groups
 */
app.use('/', new Route(Web).register());

module.exports = app;
