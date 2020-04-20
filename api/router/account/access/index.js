// Used for all account access routing such as login, logout, signup, refresh, etc...

const express = require('express');
const user = require('./user');
const professional = require('./professional');

const router = express.Router();    // Router listening on api/account/access

router.use('/user', user);
router.use('/professional', professional);

module.exports = router;