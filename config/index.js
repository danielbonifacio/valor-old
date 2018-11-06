'use strict';

const path = require('path');

const Config = {
  views: {
    engine: 'ejs',
    path: path.resolve(__dirname, '../app/views'),
  },
  sass: {
    src: path.resolve(__dirname, '../public/scss'),
    dest: path.resolve(__dirname, '../public/css'),
  },
};

module.exports = Config;
