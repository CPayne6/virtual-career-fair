const express = require('express');
const adminAuth = require('../../middleware/auth/admin');

const router = express.Router();    //  router operating on path '/api/account/admin/login'

router.post('/login', (req, res) => {
    res.send('login'); //  Temporary response for test
});

router.post('/signup', (req, res) => {
    res.send('signup'); //  Temporary response for test
});

router.post('/logout', () => {
    res.send('logout'); //  Temporary response for test
});

router.use(adminAuth);

module.exports = router;

