const express = require("express");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");
const router = require("express").Router();


// Adding a new hotel

router.post("/", async (req, res, next) => {

    const newHotel = new Hotel(req.body);

    try{
        const savedeHotel = await newHotel.save();
        res.status(200).json(savedeHotel);
    }catch(err){
        next(err);
    }
})

// Updating an existing hotel 

router.put("/:id", async (req, res, next) => {

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new:true});

        res.status(200).json(updatedHotel);
    }catch(err){
        next(err);
    }
})

// Delete a hotel 

router.delete("/:id", async (req, res, next) => {

    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted successfully !");
    }catch(err){
        next(err);
    }
})

// Get a specific hotel 

router.get("/:id", async (req, res, next) => {

    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
})

// Get all hotels

router.get("/", async (req, res, next) => {

    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
})








module.exports = router ;