const User = require("../models/User");



// Update an existing user

const updateUser = async (req, res, next) => {
    const newUser = new User(req.body);

    try{
        const savedeUser = await newUser.save();
        res.status(200).json(savedeUser);
    }catch(err){
        next(err);
    }
}

// Delete a user

const deleteUser = async (req, res, next) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted successfully !");
    }catch(err){
        next(err);
    }
}

// Get a specific user by his id

const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// Get all users

const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}


module.exports = {updateUser, deleteUser, getUser, getAllUsers};
