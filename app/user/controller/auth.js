const User =require('../model/users.model');
const jwt=require('jsonwebtoken')
const mailservices=require('../../services/mailservice');



exports.verifyToken=(req,res,next)=>  {
    //get bearer-header vald
    const bearerHeader = req.headers['authorization'];
    //check bearer-header is undefined
    if (typeof bearerHeader !== 'undefined') {
        //split at the space
        const bearer = bearerHeader.split(' ');
        //get token from array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;

        //Next middleware
        next();
    } else {
        //Forbidden
        res.send({ msg: '403-forbidden error' })
    }

}
exports.createnewuser=(req,res)=>{
    const token=req.body.tokken;
    console.log(token)
    console.log(req.body)
    const payload=jwt.verify(token,'secretKey');
    let user=new User(payload);
    user.
    save((error,data)=>{
        if(error){
         console.log(error);
        }else{
          res.send({
              message:"success"
          })
        }
    })
}

exports.loginuser=(req,res)=>{
    let userData=req.body;
    console.log(userData);
    User.findOne({email:userData.email},(error,user)=>{
        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(400).send({
                    message:'Invalid Email',
                })
            }else
            if(user.password!==userData.password){
                res.status(400).send({
                    message:'Invalid Password'
                })
            }else{
                let payload={users:user};
                let token=jwt.sign(payload,'secretkey');
                res.status(200).send({token});
                
            }
        }
    })
}