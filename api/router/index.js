const express = require('express');

const account = require('./account');
const payment = require('./payment');
// Add more for each new folder

// configure each route on a different router
const router = express.Router();

router.use('/account', account);
router.use('/payment', payment);

module.exports = router;

 