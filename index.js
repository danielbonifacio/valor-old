'use strict';

require('module-alias/register')

const normalize = require('normalize-port');
const config = require('./config');
const http = require('http');
const reload = require('reload');
const app = require('./app');
const port = normalize(config.server.port);
const mongoose = require('mongoose');

const server = http.createServer(app);

reload(app);

/**
 * Fix anoying deprecation warnings
 * found in:
 * https://github.com/Automattic/mongoose/issues/6890#issuecomment-416410444
 */
mongoose.connect(config.server.db, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const DataBase = mongoose.connection;

/**
 * Error during database connection
 * TODO: Needs to valalidade error
 */
DataBase.on('error', console.error.bind(console, 'Can\'t connect to database:'));

/**
 * Successfully connected to database
 */
DataBase.on('open', function () {
  try {
    server.listen(port, () => {
      console.log(`Server started on: http://localhost:${port}`);
    })
  } catch (err) {
    console.log(`Error: ${err}`)
  }
});
