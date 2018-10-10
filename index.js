'use strict';

const normalize = require('normalize-port');
const http = require('http');
const reload = require('reload');
const app = require('./app');
const port = normalize(3000);

const server = http.createServer(app);

reload(app);

server.listen(port, () => console.log('Server started'));