const jwt = require('jsonwebtoken');
const User = require('../model/users.model');
const mailService = require('../../services/mailservice');
const verifyService= require('../services/verifyservice');
exports.verify = (req,res) => {

    verifyService.findEmail(req.body.email)
    .then(users => {
        if (users != null) {
        res.send({msg:"Email exists"});
        }
        else {
        verifyService.findUser(req.body.userName)
        .then(data => {
            if(data!=null){
            res.send({msg:"Username exists"});
            }
            else{
            //sned mail through nodemailer and get link with token
            const tokenObj = verifyService.genToken(req.body);
            mailService.mailService(req.body, tokenObj);
            res.send({msg:"Check your email for verification"});
            }
        })
        }
    })
    .catch(error => next(error))
}

