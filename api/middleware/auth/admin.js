const jwt = require('../../../util/auth/jwt');

module.exports = (req, res, next) => {
    let test = req.cookies['jwt'];
    console.log(test);
    console.log('authenticating the admin');
    next();
}
