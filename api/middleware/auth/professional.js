const jwt = require('../../../util/auth/jwt');
const db = require('../../../db');
const cookies = require('../../../util/cookies');

function searchAndUpdateTokens(tokens){
    let found = false;
    tokens = tokens.filter((item) => {
        console.log(item);
        return true
    });

    return [true, tokens]
}

module.exports = async (req, res, next) => {
    console.log('authenticating the professional');
    let token = cookies.getProfessionalToken(req);
    let refreshToken = cookies.getProfessionalRefreshToken(req);
    
    let [ decoded, refreshUsed ] = await jwt.read(token, refreshToken);

    if(decoded){
        try{
            if(refreshUsed){
                // Check if the refresh token is valid in DB
                let tmpProfessional = await db.professional.findById(decoded.professionalID);

                let [ found, newTokenList ] = searchAndUpdateTokens(tmpProfessional.refreshTokens);
                
                if(!found){
                    return res.sendStatus(403);
                }
            }

            // Create new jwt and refresh tokens, delete the old tokens
            cookies.storeUserToken(req.user._id);
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