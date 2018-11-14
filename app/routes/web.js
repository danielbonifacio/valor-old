'use strict';

module.exports = [
  {
    method: 'get',
    name: 'docs',
    path: '/docs',
    controller: require('@controllers/docs').index,
    // middlewares: [require('@middlewares/key')],
    children: [
      {
        controller: require('@controllers/docs').configuring,
        method: 'get',
        name: 'docs/configuring',
        path: '/configuring',
      },
    ],
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
