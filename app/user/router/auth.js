const express=require('express');
const router=express.Router();
const postcontrol=require('../controller/auth')
const verify =require('../controller/varify');
router.post('/register',postcontrol.createnewuser);
router.post('/login',postcontrol.loginuser);
router.post('/verify',verify.verify)
// router.post('/users',verify.verify);
module.exports=router;