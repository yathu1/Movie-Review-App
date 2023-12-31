const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true, //for removing white spaces
        required:true
    },
    email:{
        type:String,
        trim:true, //for removing white spaces
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        required:true,
        default:false
    }
});

userSchema.pre('save',async function(next){
    if(this.isModified("password")){
        this.password =  await  bcrypt.hash(this.password,10);
   
    }
    next();
});    //before saving the schemaa file i mean newUser.save() in user controller class  code should be hashed
//this means password of the user from new user object from user controller

userSchema.methods.comparePassword = async function(password)
{
    const result = await bcrypt.compare(password,this.password);
    return result;
};


module.exports = mongoose.model("user",userSchema);