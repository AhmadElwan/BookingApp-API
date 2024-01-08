const Hotel = require("../models/Hotel");

// Add a new Hotel

const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try{
        const savedeHotel = await newHotel.save();
        res.status(200).json(savedeHotel);
    }catch(err){
        next(err);
    }
}

// Update an existing Hotel

const updateHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try{
        const savedeHotel = await newHotel.save();
        res.status(200).json(savedeHotel);
    }catch(err){
        next(err);
    }
}

// Delete a Hotel

const deleteHotel = async (req, res, next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted successfully !");
    }catch(err){
        next(err);
    }
}

// Get a specific hotel by it's id

const getHotel = async (req, res, next) => {
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
}

// Get all hotels

const getAllHotels = async (req, res, next) => {
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
}


module.exports = {createHotel, updateHotel, deleteHotel, getHotel, getAllHotels};
