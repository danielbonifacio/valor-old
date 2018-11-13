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
    res.render('Docs/index', RequestData('Docs - Valor', {
      pagina: req.params.page,
    }));
  },

  /**
   * Index page method
   * @param {object} req request
   * @param {object} res response
   */
  configuring(req, res) {
    res.render('Docs/configuring', RequestData('Configuring > Docs - Valor', {
      pagina: req.params.page,
    }));
  },
}).export();
