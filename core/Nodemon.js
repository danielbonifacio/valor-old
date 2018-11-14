const nodemon = require('nodemon');

nodemon({
  script: 'index.js',
  ext: 'js json css hbs pug ejs',
});

nodemon.on('start', function () {
}).on('quit', function () {
  console.log('App has quit');
  process.exit();
}).on('restart', function (files) {
});

module.exports = nodemon;
