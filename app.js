const express = require("express");
require('dotenv').config();
require('express-async-errors')
require("./db");
const userRouter = require('./routes/user');
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");

const app = express();

app.use(express.json())
app.use(morgan("dev"))
app.use('/api/user',userRouter)

app.use(errorHandler)


// app.post('/sign-in',(req,res,next)=>{
//     const {email,password} = req.body;
//     if(!email || !password){
//         res.json({error:"email or password wrong"});
//     }
//     next();
// },(req,res)=>{
//     res.send("<h1>Hello i am your backend about</h1>")
// });


app.listen(8000,()=>{
    console.log("port is listening on port 8000");
})