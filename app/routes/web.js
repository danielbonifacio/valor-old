'use strict';

module.exports = [
  {
    method: 'get',
    name: 'docs',
    path: '/docs',
    controller: require('@controllers/docs').index,
    // middlewares: [require('@middlewares/key')],
    meta: {
      title: 'Lol',
    },
  },
  {
    method: 'get',
    name: 'index',
    path: '/',
    controller: require('@controllers/home').index,
    // middlewares: [require('@middlewares/key')],
    meta: {
      title: 'Lol',
    },
  },
];
