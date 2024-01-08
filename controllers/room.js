const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const { createError } = require("../utils/error");



// Create and add a new room 

const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);


    try{
        const savedRoom = await newRoom.save();

        try{
            await Hotel.findByIdAndUpdate(
                hotelId,
                {$push : {rooms: savedRoom._id}}); // Add the room to the room array in Hotel
                
        }catch(err){
            next(err);
        }

        res.status(200).json(savedRoom);

    }catch(err){
        next(err);
    }
    
}


// Update an existing room

const updateRoom = async (req, res, next) => {
    
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set : req.body },
            { new: true }
            );
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);
    }
}

// Delete a room

const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;

    const roomToDelete = await Room.findOne({ "roomsNumbers._id": req.params.id });

    try{
        try{
            await Hotel.findByIdAndUpdate(
                hotelId,
                { $pull : { rooms: roomToDelete._id}// Delete the room from the room array in Hotel
            }); 

            await Room.updateOne(
                { "roomsNumbers._id": req.params.id },
                { $pull: { roomsNumbers: { _id: req.params.id } } }
            );
                
        }catch(err){
            next(err);
        }

        res.status(200).json("Room has been deleted successfully");

    }catch(err){
        next(err);
    }
}

// Get a specific hotel by it's id

const getRoom = async (req, res, next) => {
    try{
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    }catch(err){
        next(err);
    }
}

// Get all hotels

const getAllRooms = async (req, res, next) => {
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }catch(err){
        next(err);
    }
}




module.exports = {createRoom, updateRoom, deleteRoom, getRoom, getAllRooms};