const Console = require('./Console');
const chalk = require('chalk');
const { resolve } = require('path');
const from = path => resolve(__dirname, '../resources', path);
const to = path =>resolve(__dirname, '../public/assets/', path);

const copy = (a, b) => new Promise((resolve, reject) => {
  const ncp = require('ncp').ncp;
  b = b ? b : a;
  
  ncp(from(b), to(a), err => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log(`${chalk.red(`Error: ${b} doesn't exists.`)}`);
      }
      reject(err);
    }

    console.log(`\t${chalk.green(`resources/${b}`)} => ${chalk.yellow(`public/assets/${a}`)}`);
    
    resolve({
      fromPath: b,
      toPath: b,
      status: 'success',
    });

  });

});

module.exports = {
  copy
};
