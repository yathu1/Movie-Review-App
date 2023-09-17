const User = require('../models/user');
const EmailVerificationToken = require('../models/emailVerificationToken');
const nodemailer = require('nodemailer');
const {isValidObjectId} = require('mongoose');
const { generateOTP, generateMailTransporter } = require('../utils/mail');
const { sendError } = require('../utils/helper');

exports.create = async (req,res)=>{
    const {name,email,password} = req.body;
    
    const oldUser = await User.findOne({email});
    if(oldUser) return sendError(res,"This email is already in use!");

    const newUser = new User({name,email,password});
    await newUser.save();

    //generate 6 digit otp
    let OTP =generateOTP();
   
    //store otp inside our db
    const newEmailVerifiacationToken = new EmailVerificationToken({
        owner:newUser._id,token:OTP,
    });
    await newEmailVerifiacationToken.save();
    //send that otp to our user
    let transport = generateMailTransporter();
      
      transport.sendMail({
        from:'verification@reviewapp.com',
        to:newUser.email,
        subject:'Email Verification',
        html:`
        <p>Your Verfication OTP</p>
        
        <h1> ${OTP} </h1>`,
      });

    res.status(201).json({message:`Please verify Your email . OTP  has been sent to your email!`});
}


exports.verifyEmail =async (req,res) =>{
    const {userId,OTP} = req.body; //It assumes that the client is sending a POST request with a JSON body
                                    // that contains the userId and OTP to verify the email address.

    if(!isValidObjectId(userId)){
        return res.json({error:'invalid User ID!'});
    }

    const user = await User.findById(userId);
    if(!user) {
        return sendError(res,"user not found",404);
    }

    if(user.isVerified) {
        return sendError(res,"user is already verified"); 
    }

    const token = await EmailVerificationToken.findOne({owner:userId});
    if(!token) {
        return sendError(res,"token not found");  
    }

    const isMatched = await token.compareToken(OTP)
    if(!isMatched){
        return sendError(res,'please submit valid OTP'); 
    }

    user.isVerified = true;
    await user.save();

    await EmailVerificationToken.findByIdAndDelete(token._id);

    var transport = generateMailTransporter();
      
      transport.sendMail({
        from:'verification@reviewapp.com',
        to:user.email,
        subject:'Welcome Email',
        html:`
        
        <h1> Welcome to our app </h1>`,
      });

    res.json({message:'Your email is verified'})

}

exports.resendEmailVerificationToken = async (req,res) =>{
  const {userId} = req.body;

  const user = await User.findById(userId);
  if(!user) return sendError(res,"user not found");  

  if(user.isVerified) return  sendError(res,"This email id is already verified");   

  const alreadyHasToken = await EmailVerificationToken.findOne({
    owner:userId
  });
  if(alreadyHasToken) return sendError(res,"Only after One hour You can request for another token"); 

   //generate 6 digit otp
   let OTP =generateOTP();
   
   //store otp inside our db
   const newEmailVerifiacationToken = new EmailVerificationToken({
       owner:user._id,token:OTP,
   });
   await newEmailVerifiacationToken.save();
   //send that otp to our user
   var transport = generateMailTransporter();
     
     transport.sendMail({
       from:'verification@reviewapp.com',
       to:user.email,
       subject:'Email Verification',
       html:`
       <p>Your Verfication OTP</p>
       
       <h1> ${OTP} </h1>`,
     });

   res.status(201).json({message:`New OTP has been sent to your registered email address`});
}
