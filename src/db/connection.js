//this file handles connections to a database, using mongoose
const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected!")
    }
    catch (error){
        console.log("Bad shit went down in 'connection.js': \n"+error+"\n")
    }

}

connection();