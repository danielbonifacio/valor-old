const chalk = require('chalk');

const log = {
  error(message) {
    return console.log(chalk.red(`  ${message}`));
  },

  success(message) {
    return console.log(chalk.green(`  ${message}`));
  },
};

module.exports = log;
