const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
       
    },
    password:{
        type:String,
        required:true
    },
    
    phoneNumber:{
        type:Number,
        required:true
    }
    
})
module.exports = mongoose.model("userDetails",usersSchema)