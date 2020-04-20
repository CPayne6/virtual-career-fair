const userModel = require('../models/User');
const refreshExpiryTime = 604800000;

async function findByEmail(userEmail){
    return await userModel.findOne({email: userEmail}).exec();
}

async function findById(id){
    return await userModel.findById(id, '-password').exec();
}

async function updateTokens(id, tokens){ // TODO: finish refresh token insertion
    tokenList.filter((item) => {
        console.log(item);
    });

    return true;
    //userModel.findByIdAndUpdate(id, ).exec();
}

async function setTokens(id, tokens){
    return await userModel.updateOne({ _id: id}, {refreshTokens: tokens});
}

module.exports = {
    findByEmail,
    findById,
    setTokens
};