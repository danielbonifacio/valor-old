'use strict';

const normalize = require('normalize-port');
const app = require('./app');

const port = normalize(3000);

app.set('view engine', 'pug');
app.set('views', './app/views');

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});
