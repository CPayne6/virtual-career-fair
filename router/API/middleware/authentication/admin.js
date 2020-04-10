
module.exports = (req, res, next) => {
    console.log('authenticating the admin');
    next();
}
