const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const cookieParser = require("cookie-parser");



const app = express();
dotenv.config();

// Connecting to Database

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Successfully connected to DB"))
    .catch((err) => {
        console.log("Connection to database failed : " , err);
});

// Middlewares
app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


// Middleware to handle errors 

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500 ;
    const errorMessage = err.message || "Something went wrong !" ;
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})









app.listen(8000, () => {
    console.log("Backend server is running");
})