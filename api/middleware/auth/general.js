// Handles authentication of all 3 types of users

const jwt = require('../../../util/auth/jwt');

module.exports = (req, res, next) => {
    let encoded = req.cookies['jwt'];
    if(encoded)
        req.token = jwt.read(encoded);
    console.log('authenticating the user');
    next();
}
