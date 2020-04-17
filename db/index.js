
const userDB = require('./controllers/user');
const professionalDB = require('./controllers/professional');

module.exports = {
    user: userDB,
    professional: professionalDB
}