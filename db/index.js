const mongoose = require('mongoose');
 
mongoose.connect(process.env.MONGO_URI) //review_app database name
.then(()=>{
    console.log("db us connected!");
})
.catch((ex)=>{
    console.log("db connection failed",ex);
})