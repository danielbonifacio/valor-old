const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const Config = require('../../config');

console.log(Config.sass.src);
console.log(Config.sass.dest);

module.exports = sassMiddleware({
  src: Config.sass.src,
  dest: Config.sass.dest,
  debug: true,
  indentedSyntax: true,
  outputStyle: 'compressed',
  prefix: '/css'
});
