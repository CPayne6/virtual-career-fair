const jwt = require('jsonwebtoken');
const expiryTime = '7d';


function write(payload, newTime){
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: newTime | expiryTime});
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

exports = {
    write,
    read
}