const express = require('express');
const recruiterAuth = require('../middleware/authentication/recruiter');

const router = express.Router();    //  router operating on path '/api/account/recruiter/login'

router.post('/login', (req, res) => {
    res.send('login'); //  Temporary response for test
});

router.post('/signup', (req, res) => {
    res.send('signup'); //  Temporary response for test
});

router.post('/logout', () => {
    res.send('logout'); //  Temporary response for test
});

router.use(recruiterAuth);

module.exports = router;

