const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
        email:{
        type:String,required:true
        },
        name:{
            type:String,required:true
        },
        price:{
            type:Number,required:true
        },
        image:{
            data:Buffer,contentType:String
        }

})
module.exports = mongoose.model("cartDetails",cartSchema)