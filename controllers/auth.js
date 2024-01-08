const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error");

// Register a new user

const register = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(200).json(newUser);
    }catch(err){
        next(err);
    }
}


// Login as an existing user

const login = async (req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user) return next(createError(404, "Wrong Credentials !"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(404, "Wrong Credentials !"));

        const {password, isAdmin, ...others} = user._doc;

        res.status(200).json(others);
    }catch(err){
        next(err);
    }
}



module.exports = {register, login};
