const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,   
    },
    fullName:{
        type: String,
       
    },
    gender:String,
    email: {
        type: String,
        unique:true
           },
    mobileNumber:Number,
    password: String,
    // confirmPassword:String
});

module.exports = mongoose.model('users', userSchema);