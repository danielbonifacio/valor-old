'use strict';
const RequestData = require('@core/RequestData');
const Controller = require('@core/Controller');

module.exports = new Controller({
  index(req, res) {
    const data = {
      page: {
        title: 'Valor - Express Boilerplate',
        extendedTitle: false,
      },
      features: [
        {
          title: 'MVC',
          description: 'Use MVC pattern with a simple structure',
        },
        {
          title: 'Helpers',
          description: 'A lot of helpers to simplify your code',
        },
        {
          title: 'Malleable',
          description: 'Choose your preferred database, template engine, etc.',
        },
      ],
      title: 'Oi',
      message: 'Olá, Mundo!',
      codeSample: `'use strict';

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
    res.render('Docs/index', RequestData('Docs', {
      page: req.params.page,
    }));
  },
}).export();`,
    };

    res.render('Home/index', RequestData('Valor - Express Boilerplate', data));
  },
}).export();
