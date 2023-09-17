const nodemailer = require ("nodemailer");

 exports.generateOTP =(otp_length = 6)=>{

 
 //generate 6 digit otp
 let OTP ='';
 for(let i=1; i<=otp_length; i++){
     const randomVal = Math.round(Math.random() * 9);
     OTP += randomVal;
 }

    return OTP;
};

exports.generateMailTransporter = () => {
     return   nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "25c978330197fc",
          pass: "9397552f32fd32"
        }
      });
}