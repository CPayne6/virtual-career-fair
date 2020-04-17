const jwt = require('./auth/jwt');

module.exports = (user, res) => {
    res.cookie('jwt', jwt.write(user), {httpOnly: true});   // TODO: add the secure: true flag to options once https is established in production
}