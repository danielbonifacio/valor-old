'use strict';

const express = require('express');
const controller = require('../controllers/docs');

const router = express.Router();

router
  .get('/', controller.index);

module.exports = router;
