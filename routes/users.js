const express = require("express");
const User = require("../models/User");
const { updateUser, deleteUser, getUser, getAllUsers } = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");
const router = require("express").Router();



// Testing if the JWT is working 

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in !");
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in, and you can delete your account !");
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin, you are logged in, and you can delete all accounts !");
// })



// Updating an existing user 

router.put("/:id", verifyUser, updateUser);

// Delete a user 

router.delete("/:id", verifyUser, deleteUser);

// Get a specific user by his id

router.get("/:id", verifyUser, getUser);

// Get all users

router.get("/", verifyAdmin, getAllUsers);








module.exports = router ;