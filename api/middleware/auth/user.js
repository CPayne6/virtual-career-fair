
module.exports = (req, res, next) => {
    console.log('authenticating the user');
    next();
}
