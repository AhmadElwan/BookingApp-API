const express = require("express");
const router = require("express").Router();
const { register, login } = require("../controllers/auth");


// Register a new user

router.post("/register", register);

// Login as an existing user

router.post("/login", login);





module.exports = router ;