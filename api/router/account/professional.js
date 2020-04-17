const express = require('express');

const signin = require('../../../placeholder/sign-in').admin;
const signup = require('../../../placeholder/sign-up').admin;

const router = express.Router();    //  router operating on path '/api/account/admin/login'

router.post('/login', (req, res) => {
    res.send(signin); //  Temporary response for test
});

router.post('/signup', (req, res) => {
    res.send(signup); //  Temporary response for test
});

router.post('/logout', () => {
    res.send({success:true}); //  Temporary response for test
});

module.exports = router;

