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
    },
    productData:{
        productName:{type:String,required:true},productPrice:{type:Number,required:true},productSize:{type:String,required:true},img:{data:Buffer,contentType:String}
    
    }
})
module.exports = mongoose.model("students",usersSchema)