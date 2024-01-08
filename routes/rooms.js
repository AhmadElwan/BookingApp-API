const express = require("express");
const { verifyAdmin } = require("../utils/verifyToken");
const {createRoom, updateRoom, deleteRoom, getRoom, getAllRooms} = require("../controllers/room");
const router = require("express").Router();


// Adding a new hotel

router.post("/:hotelid", verifyAdmin, createRoom);

// Updating an existing hotel 

router.put("/:id", verifyAdmin, updateRoom);

// Delete a hotel 

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// Get a specific hotel 

router.get("/:id", getRoom);

// Get all hotels

router.get("/", getAllRooms);








module.exports = router ;