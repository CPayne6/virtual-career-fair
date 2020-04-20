require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    dbURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET
    // More as we add to the .env file
}