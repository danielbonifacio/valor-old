'use strict';

const RequestData = require('@core/RequestData');
const Controller = require('@core/Controller');

/**
 * Documentation controller
 */
module.exports = new Controller({
  /**
   * Index page method
   * @param {object} req request
   * @param {object} res response
   */
  index(req, res) {
    res.render('Docs/index', RequestData('Documentação - Valor', {
      teste: 'Controller de documentação: index',
    }));
  },
}).export();
