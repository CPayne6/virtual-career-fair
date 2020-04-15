const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hash(pass){
    return await bcrypt.hash(pass, saltRounds);
}

async function compare(pass, hashPass){
    try{
        return await bcrypt.compare(pass, hashPass);
    }
    catch(e){
        return -1;
    }
}

module.exports = {
    hash,
    compare
}