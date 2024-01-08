const express = require("express");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels } = require("../controllers/hotel");
const router = require("express").Router();


// Adding a new hotel

router.post("/", createHotel);

// Updating an existing hotel 

router.put("/:id", updateHotel);

// Delete a hotel 

router.delete("/:id", deleteHotel);

// Get a specific hotel 

router.get("/:id", getHotel);

// Get all hotels

router.get("/", getAllHotels);








module.exports = router ;