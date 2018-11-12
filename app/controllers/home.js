'use strict';

module.exports = {
  index(req, res) {
    res.render('Home/index', { title: 'Oi', message: 'Olá, Mundo!' });
  },
};
