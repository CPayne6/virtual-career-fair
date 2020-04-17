
module.exports = (req, res, next) => {
    if(req.token){
        console.log('user is authorized');
    }
    else{
        console.log('user is not authorized');
    }
    next();
}