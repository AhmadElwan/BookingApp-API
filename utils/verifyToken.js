const jwt = require("jsonwebtoken");
const { createError } = require("./error");


// Check if the token is valid

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated"));
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if(err) return next(createError(403, "Token is not valid !"));
        req.info = user;
        next();
    });
}

// Check if the user is authorized 

const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.info.id === req.params.id || req.info.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized !"));
        }
    })
}

// Check if the user is an admin

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.info.isAdmin){
            next();
        }else{
            if(err) return next(createError(403, "You are not authorized !"));
        }
    })
}







module.exports = {verifyToken, verifyUser, verifyAdmin};

