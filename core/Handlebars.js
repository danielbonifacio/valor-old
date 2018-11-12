const expbhs = require('express-handlebars');
const Config = require('../config');

const Handlebars = {
  defaultLayout: 'main',
  extname: 'hbs',
  layoutsDir: `${Config.views.path}/_layouts`,
  partialsDir: `${Config.views.path}/_partials`,

  helpers: {
    asset(fileName) {
      return `/static/assets/${fileName}`;
    },
  },
};

const hbs = expbhs.create(Handlebars);

module.exports = hbs;
