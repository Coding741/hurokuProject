
const express = require("express");
const util = require("util");
const morgan = require("morgan");
const config = require("config");
const app = express();
const helmet = require("helmet");
const compression =  require("compression");
const PORT = config.get("PORT") || 3000;

console.log(config.get('env'));
/*
    Middleware Start
*/
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan("tiny"));
app.use(helmet());
app.use(compression());

app.get("/",(req,res)=>{
    console.log("Hello index Nine");
    res.status(200).send("Welcome To the Index Nine");
});
/*
    Middleware End
*/
const server = app.listen(PORT,(err)=>{
    try{
        if(!util.isNullOrUndefined(PORT)){
            console.log(`Server Running on Port ${PORT}`);
        }
    }catch(error){
        console.log("Error ",error);
    }
})
module.exports=server; 