const jwt = require('jsonwebtoken');

const refreshExpiryTime = '7d';
const standardExpiryTime = '15m';


function write(payload, refresh){
    let test = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: (refresh ? refreshExpiryTime : standardExpiryTime) });
    console.log(test);
    return test;
}

// TODO incorporate refresh tokens

function read(token, refresh){
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    }
    catch(e){
        if(refresh){
            // do refresh token stuff here
        }
        console.log(e);
    }
}

module.exports = {
    write,
    read
}