const user = require('../model/users.model');
const jwt = require('jsonwebtoken');

exports.findUser=(userName)=>{
    try
    {
        return user.findOne({userName});
    }
    catch(error)
    {
        throw error
    }
    
}

exports.findEmail=(email)=>{
    try
    {
        return user.findOne({email});
    }
    catch(error)
    {
        throw error
    }
    
}

exports.genToken=(user)=>{
    try
    {
        return jwt.sign(user, 'secretKey');
    }
    catch(error)
    {
        throw error
    }
}