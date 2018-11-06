'use strict';

const path = require('path');
const fs = require('fs');

/**
 * truncate project's directory
 * @param {Number} level level of cleaning
 * @returns {Boolean}
 */

const truncate = level => {
  const res = (...dirs) => path.resolve(__dirname, '..', ...dirs);

  const remove = {
    docs() {
      const d = res('docs');
      fs.existsSync(d) && fs.rmdirSync(d);
      return this;
    },
    git() {
      const g = res('git.teste');
      fs.existsSync(g) && fs.rmdirSync(g);
      return this;
    },
  };

  level > 0 && remove.docs().git();

  console.log('Successfully truncated.');
};

// truncate(1);
const getArgs = () => { process.argv.splice(0, 2); return process.argv };
const getLevel = () => getArgs()[1];
const args = getArgs();

args.includes('truncate') && truncate(getLevel());