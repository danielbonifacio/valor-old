const expbhs = require('express-handlebars');
const Config = require('@config');

const Handlebars = {
  defaultLayout: 'main',
  extname: 'hbs',
  layoutsDir: `${Config.views.path}/_layouts`,
  partialsDir: `${Config.views.path}/_partials`,

  helpers: {
    asset(fileName) {
      return `/static/assets/${fileName}`;
    },

    web(routeName) {
      const routes = require('@routes/web');
      const route = routes.find(route => route.name === routeName);
      return `${route.path}`;
    },
  },
};

const hbs = expbhs.create(Handlebars);

module.exports = hbs;
