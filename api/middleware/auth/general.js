// Handles authentication of all 3 types of users

const jwt = require('../../../util/auth/jwt');

module.exports = (req, res, next) => {
    // TODO add source verification and general accound middleware
    next();
}
