const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Home Route")
})
app.get('/new',(req,res)=>{
    res.send("New Route")
})

app.get('/user/:userID',(req,res)=>{
    res.send(`User ID : ${req.params.userID}`)
})

app.listen(4000,()=>{
    console.log("Server is listening on port 4000")
})