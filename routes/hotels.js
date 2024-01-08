const express = require("express");
const Hotel = require("../models/Hotel");
const { verifyAdmin } = require("../utils/verifyToken");
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels } = require("../controllers/hotel");
const router = require("express").Router();


// Adding a new hotel

router.post("/", verifyAdmin, createHotel);

// Updating an existing hotel 

router.put("/:id", verifyAdmin, updateHotel);

// Delete a hotel 

router.delete("/:id", verifyAdmin, deleteHotel);

// Get a specific hotel 

router.get("/:id", getHotel);

// Get all hotels

router.get("/", getAllHotels);








module.exports = router ;