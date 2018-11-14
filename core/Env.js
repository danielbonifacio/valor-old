'use strict';

process.argv.splice(0, 2);

const arg = process.argv.toString();
const log = require('./Console');

const generateEnv = () => {
  // Dependencies
  const fs = require('fs');
  const path = require('path');

  const dir = {
    sample: path.resolve(__dirname, '../.env.sample'),
    env: path.resolve(__dirname, '../.env'),
  };

  /**
   * throw an error if .env file already exists
   */
  fs.existsSync(dir.env) && log.error('The environment file already exists!');

  const sample = fs.readFileSync(dir.sample, 'utf-8');

  /**
   * tries to write env file in disk
   * needs disk write permission
   */
  try {
    fs.writeFileSync(dir.env, sample);
    log.success('Environment file successfully created');
  } catch(err) {
    log.error(err);
  }
}

arg === '--generate' && generateEnv();
