const express = require('express');

const user = require('./user');
const professional = require('./professional');

const router = express.Router();    //  router operating on path '/api/account/edit'


router.use('/user', user);
router.use('/professional', professional);

// Add put, post, delete and get routes here for user account interaction

module.exports = router;

