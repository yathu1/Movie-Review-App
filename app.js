const express = require("express");
const userRouter = require('./routes/user')
const app = express();

app.use(userRouter)

app.get('/about',(req,res)=>{
    res.send("<h1>Hello i am your backend about</h1>")
});


app.listen(8000,()=>{
    console.log("port is listening on port 8000");
})