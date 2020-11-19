
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
// const logger = require('../../configuration/logger'); 
//nodemailer
exports.mailService = (userData,tokenObj) => {
    console.log("token:",tokenObj);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'suraj19bartwal97@gmail.com',
            pass: 'surajsingh5',
        }
    });
    const mailOptions = {
        from: 'suraj19bartwal97@gmail.com',
        to: userData.email,
        subject: 'verifyemail',
        text: `You are recieving this mail regarding verification.`,
        html:`<div>
        <p>You are receiving this male regarding verification for ModernCloset</p>
        <a href=http://localhost:4200/redirect/${tokenObj}>click here to submit</a>
        </div>`
    };
    // ?email=${userData.email}
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('There was error', err);

        } else {
            console.log("verify in");
        }
    })
}

exports.mailForPassword = (id,email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'suraj19bartwal97@gmail.com',
            pass: 'surajsingh5',
        }
    });
    const mailOptions = {
        from: 'suraj19bartwal97@gmail.com',
        to: email,
        subject: 'email for change password',
        text: `You are recieving this mail regarding Forgot password.`,
        html:`<a href=http://localhost:4200/reset/${id}>click here to submit</a>`
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            
            console.log(`there was error ${err}`)

        } else {
            console.log(`verify in`);
        }
    })
}