const jwt = require('./auth/jwt');

module.exports = (user, res) => {
    res.cookie('jwt', jwt.write(user), {httpOnly: true, secure: true});
}