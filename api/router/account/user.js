const express = require('express');
const cookie = require('../../../util/cookies');
const userService = require('../../controllers/account/user');
const userMiddleware = require('../../middleware/auth/user');

const router = express.Router();    //  router operating on path '/api/account/user/login'

router.use(userMiddleware);

router.post('/login', (req, res) => {
    userService.login(req, res);
});

router.post('/signup', (req, res) => {
    userService.signup(req, res);
});

router.post('/logout', (req, res) => {
    userService.logout(req, res);
});

router.post('/testjwt', (req, res) => {
    res.send(req.jwt);
})

module.exports = router;

