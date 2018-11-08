'use strict';

const normalize = require('normalize-port');
const Config = require('./config');
const http = require('http');
const reload = require('reload');
const app = require('./app');
const port = normalize(Config.server.port);

const server = http.createServer(app);

reload(app);

server.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}/`);
});
