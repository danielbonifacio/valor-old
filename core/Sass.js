const util = require('util');
const exec = util.promisify(require('child_process').exec);

function renderSass() {
  exec('node-sass -o resources/css resources/sass');
}

module.exports = renderSass;
