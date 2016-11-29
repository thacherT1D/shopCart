'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/inventory', (_req, res, next) => {
  knex('inventory')
    .orderBy('name')
    .then((rows) => {
      const inventory = camelizeKeys(rows);

      res.send(inventory);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
