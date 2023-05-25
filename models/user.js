// Defining the Schema and Models of the user database.

const mongoose = require("mongoose")

//Schema
const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
})



//Creating the models
const User = mongoose.model('user',userSchema);


module.exports = User;