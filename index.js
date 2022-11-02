const express = require("express");
//const defaultExport = require('./auth.js')
const {NamedExp} = require('./auth.js')
//Q 1. How do you create a simple Express.js application?/ implementation of cors

const cors = require("cors") //install cors using npm i cors

const app = express();

app.use(cors()) //used cors in app

//adding middleware in app and in route

const middleware1 = (req,res,next) => {
    console.log("middleware 1");
    next();
}
const middleware2 = (req,res,next) => {
    console.log("middleware 2");
    next();
}

app.use(middleware1);

app.get("/", middleware2,(req,res)=>{
    res.send("hello node");

})
app.get("/home",middleware2,(req,res)=>{
    res.send("hello World");

})


//Q 2. Implementation of all type of exports in backend application

//app.use("/api", defaultExport)

app.use("/server", NamedExp)


app.listen(5000, ()=>{
    console.log("server live");
})