const express = require('express');
const userAuth = require('../middleware/authentication/user');

const router = express.Router();    //  router operating on path '/api/account/user/login'

router.post('/login', (req, res) => {
    res.send('login'); //  Temporary response for test
});

router.post('/signup', (req, res) => {
    res.send('signup'); //  Temporary response for test
});

router.post('/logout', () => {
    res.send('logout'); //  Temporary response for test
});

router.use(userAuth);

module.exports = router;

