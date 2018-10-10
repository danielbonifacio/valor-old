'use strict';

const index = function (req, res) {
  res.render('Home/index', { title: 'Oi', message: 'Olá, Mundo!' });
};

module.exports = {
  index,
};
