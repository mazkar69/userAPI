//Connect the Database To the mongo db atlas

const mongoose = require("mongoose")

require('dotenv').config()

const ConnectDB = async()=>{
    try{
        const URI = process.env.MONGO_URI;

        await mongoose.connect(URI);
        console.log("Database Connected Successfully :)")

    }catch(err){
        console.log(err)
    }

}

module.exports = ConnectDB;
