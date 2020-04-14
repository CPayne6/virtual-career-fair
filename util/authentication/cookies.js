module.exports = (res, token) => {
    res.cookie('jwt', token, {httpOnly: true, secure: true});
}