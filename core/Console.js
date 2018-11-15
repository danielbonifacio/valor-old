const chalk = require('chalk');

const log = {
  error(message) {
    return console.log(chalk.red(`  ${message}`));
  },

  success(message) {
    return console.log(chalk.green(`  ${message}`));
  },

  warning(message) {
    return console.log(chalk.yellow(`  ${message}`));
  },

  clear() {
    return console.clear();
  },
};

module.exports = log;
