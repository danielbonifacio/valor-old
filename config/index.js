'use strict';

const path = require('path');

const Config = {
  server: {
    port: process.env.PORT || 3000,
  },
  views: {
    engine: 'mustache',
    extension: 'hbs',
    path: path.resolve(__dirname, '../app/views'),
  },
  sass: {
    src: path.resolve(__dirname, '../public/scss'),
    dest: path.resolve(__dirname, '../public/css'),
  },
};

module.exports = Config;
