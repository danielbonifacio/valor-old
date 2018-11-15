'use strict';

const RequestData = require('@core/RequestData');
const Controller = require('@core/Controller');
const Doc = require('@models/doc');

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
    Doc.findOne({ route: 'docs/configuring' })
      .then(data => {
        res.render('Docs/configuring', RequestData('Configuring > Docs - Valor', data));
      });
  },
}).export();
