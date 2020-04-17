const userModel = require('../models/User');

async function findByEmail(userEmail){
    return await userModel.findOne({email: userEmail}).exec();
}

async function findById(){

}

module.exports = {
    findByEmail,
    findById
};