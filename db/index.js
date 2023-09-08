const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/review_app") //review_app database name
.then(()=>{
    console.log("db us connected!");
})
.catch((ex)=>{
    console.log("db connection failed",ex);
})