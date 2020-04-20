const jwt = require('./auth/jwt');

// Define constants
const userTokenKey = 'jwt-user';
const userRefreshTokenKey = 'jwt-user-refresh';
const professionalTokenKey = 'jwt-professional';
const professionalRefreshTokenKey = 'jwt-professional-refresh';

function storeUserToken(id, res){
    res.cookie(userTokenKey, jwt.write({userID: id}), {httpOnly: true});   // TODO: add the secure: true flag to options once https is established in production
}

function getUserToken(req){
    return req.cookies[userTokenKey];
}

function storeUserRefreshToken(id, res){
    res.cookie(userRefreshTokenKey, jwt.write({userID: id}, true), {httpOnly: true});
}

function getUserRefreshToken(req){
    return req.cookies[userRefreshTokenKey];
}

function storeProfessionalToken(id, res){
    res.cookie(professionalTokenKey, jwt.write({professionalID: id}), {httpOnly: true});   // TODO: add the secure: true flag to options once https is established in production
}

function getProfessionalToken(req){
    return req.cookies[professionalTokenKey];
}

function storeProfessionaRefreshToken(id, res){
    res.cookie(professionalRefreshTokenKey, jwt.write({professionalID: id}, true), {httpOnly: true});
}

function getProfessionalRefreshToken(req){
    return req.cookies[professionalRefreshTokenKey];
}

module.exports = {
    storeUserToken,
    getUserToken,
    storeUserRefreshToken,
    getUserRefreshToken,
    storeProfessionalToken,
    getProfessionalToken,
    storeProfessionaRefreshToken,
    getProfessionalRefreshToken
}