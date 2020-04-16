const express = require('express');
const recruiterAuth = require('../../middleware/auth/recruiter');

const signin = require('../../../placeholder/sign-in').recruiter;
const signup = require('../../../placeholder/sign-up').recruiter;

const router = express.Router();    //  router operating on path '/api/account/recruiter/login'

router.post('/login', (req, res) => {
    res.send(signin); //  Temporary response for test
});

router.post('/signup', (req, res) => {
    res.send(signup); //  Temporary response for test
});

router.post('/logout', () => {
    res.send({success: true}); //  Temporary response for test
});

router.use(recruiterAuth);

module.exports = router;

