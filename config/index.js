'use strict';

const path = require('path');

const Config = {
  views: {
    engine: 'ejs',
    path: path.resolve(__dirname, '../app/views'),
  },
};

module.exports = Config;