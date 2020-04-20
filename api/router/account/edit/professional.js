const express = require('express');
const professionalAuth = require('../../../middleware/auth/professional')

const router = express.Router();    //  router operating on path '/api/account/admin/login'

router.use(professionalAuth);

// Add put, post, delete and get routes here for professional account interaction

module.exports = router;

