
const express = require('express');

const admin = require('./admin');
const recruiter = require('./recruiter');
const user = require('./user');

// return router with every route on it

const router = express.Router();

router.use('admin', admin);
router.use('recruiter', recruiter);
router.use('user', user);

// can add middleware to the router

exports = router;