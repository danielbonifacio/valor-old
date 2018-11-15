'use strict';

const path = require('path');

const Config = {
  server: {
    base_url: `${process.env.PROTOCOL}://${process.env.HOST}${process.env.PORT != 80 ? `:${process.env.PORT}`: ''}`,
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://administrador:valor123456789@ds161183.mlab.com:61183/valor_teste',
  },
  views: {
    engine: 'hbs',
    path: path.resolve(__dirname, '../app/views'),
  },
};

module.exports = Config;
