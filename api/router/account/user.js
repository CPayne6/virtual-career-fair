const express = require('express');
const userAuth = require('../../middleware/auth/user');
const cookie = require('../../../util/cookies');
const userService = require('../../controllers/user');
const userModel = require('../../../db/models/User');

// placeholder routes
const signin = require('../../../placeholder/sign-in').user;
const signup = require('../../../placeholder/sign-up').user;

const router = express.Router();    //  router operating on path '/api/account/user/login'

router.post('/login', (req, res) => {
  res.send(signin); //  Temporary response for test
});

router.post('/signup', (req, res) => {
  //userService.signup(req, res);
  res.send(signup); //  Temporary response for test
});

router.post('/logout', () => {
  res.send({success: true}); //  Temporary response for test
});

router.use(userAuth);

module.exports = router;

