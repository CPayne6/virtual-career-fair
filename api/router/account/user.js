const express = require('express');
const userAuth = require('../../middleware/auth/user');
const cookie = require('../../../util/cookies');
const userService = require('../../controllers/user');
const userModel = require('../../../db/models/User');

const router = express.Router();    //  router operating on path '/api/account/user/login'

router.post('/login', (req, res) => {
  let response = require('../../../placeholder/sign-in').user;
  cookie(req.user, res);
  res.send(response); //  Temporary response for test
});

router.post('/signup', (req, res) => {
  userService.signup(req, res);
  let response = require('../../../placeholder/sign-in').user;
  res.send(response); //  Temporary response for test
});

router.post('/logout', () => {
  res.send('logout'); //  Temporary response for test
});

router.use(userAuth);

module.exports = router;

