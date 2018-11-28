const compiler = require('./core/Compiler');

Promise.all([
  compiler.copy('img'),
  compiler.copy('css'),
  compiler.copy('icons'),
])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('\tˆˆˆ error ˆˆˆ');
  });