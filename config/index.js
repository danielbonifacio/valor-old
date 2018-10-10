'use strict';

const path = require('path');

const Config = {
  views: {
    engine: 'pug',
    path: path.resolve(__dirname, './app/views'),
  },
};

module.exports = Config;