const jwt = require('jsonwebtoken');

const refreshExpiryTime = '7d';
const standardExpiryTime = '15m';


function write(payload, refresh){
    try{
        if(refresh){
            return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: refreshExpiryTime })
        }

        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: standardExpiryTime })
    }
    catch(e){
        console.log('invalid payload sent to JWT write');
    }
}

// TODO incorporate refresh tokens

async function read(token, refreshToken){
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        return [decoded, false];
    }
    catch(tokenError){
        if(refreshToken){
            try{
                let refreshDecoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
                return [refreshDecoded, true];
            }
            catch(RefreshTokenError){ // user is not authenticated
                return [null, false]
            }
        }
        console.log(typeof tokenError);
        return [null, false];
    }
}

module.exports = {
    write,
    read
}