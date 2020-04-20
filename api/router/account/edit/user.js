const express = require('express');
const userService = require('../../../controllers/account/edit/user');
const userMiddleware = require('../../../middleware/auth/user');

const router = express.Router();    //  router operating on path '/api/account/user/login'

router.use(userMiddleware);

router.post('/test', (req, res) => {
    console.log('authorized');
    res.send('authenticated!!');
})

module.exports = router;

