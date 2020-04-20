const jwt = require('../../../util/auth/jwt');
const db = require('../../../db');
const cookies = require('../../../util/cookies');

function searchAndUpdateTokens(tokens, currentToken){
    let found = false;
    tokens = tokens.filter((item) => {
        let expiryDate = new Date(item.expiryDate);

        if(expiryDate.getTime() <= (new Date()).getTime()){
            return false;
        }

        if(item.token == currentToken){
            found = true;
        }
        return true;
    });

    return [found, tokens];
}

module.exports = async (req, res, next) => {
    console.log('authenticating the user');
    let token = cookies.getUserToken(req);
    let refreshToken = cookies.getUserRefreshToken(req);

    let [ decoded, refreshUsed ] = await jwt.read(token, refreshToken);

    if(decoded){
        try{
            if(refreshUsed){
                // Check if the refresh token is valid in DB
                let tmpUser = await db.user.findById(decoded.userID);
                let [ found, newTokenList ] = searchAndUpdateTokens(tmpUser.refreshTokens, refreshToken);

                if(newTokenList.length !== tmpUser.refreshTokens.length){
                    let res = await db.user.setTokens(tmpUser._id, newTokenList);
                    if(res.ok !== 1){
                        return res.sendStatus(500);
                    }
                }

                if(!found){
                    return res.sendStatus(403);
                }
            }
            else{

            }

            // Create new jwt and refresh tokens, delete the old tokens
            //cookies.storeUserToken(decoded.userID, res);
        }
        catch(e){
            console.log(e);
            return res.sendStatus(500);
        }

        next();
    }
    else{
        return res.sendStatus(401);
    }
}