const express = require('express');
const userAuthService = require('../../../controllers/account/access/user');

const router = express.Router();    //  router operating on path '/api/account/user/login'

router.post('/login', (req, res) => {
    userAuthService.login(req, res);
});

router.post('/signup', (req, res) => {
    userAuthService.signup(req, res);
});

router.post('/logout', (req, res) => {
    userAuthService.logout(req, res);
});

router.post('/refresh', (req, res) => {
    res.send({status: 'not available'});
})

module.exports = router;

