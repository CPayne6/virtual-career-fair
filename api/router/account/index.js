
const express = require('express');
const jwtAuth = require('../../middleware/auth/general');

const admin = require('./professional');
const user = require('./user');

// return router with every route on it

const router = express.Router();

//router.use(jwtAuth); TODO add back (commented out for placeholder)

router.use('/admin', admin);
router.use('/user', user);

// can add middleware to the router


module.exports = router;