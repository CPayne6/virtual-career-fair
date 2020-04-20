
const express = require('express');

const access = require('./access');
const edit = require('./edit');

// return router with every route on it

const router = express.Router();

// can add middleware to the router

router.use('/access', access);
router.use('/edit', edit);

module.exports = router;