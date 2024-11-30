const mongoose=require('mongoose');
require('dotenv').config();

//var  mongo_URL=process.env.MONGODB_URL_LOCAL;
var mongo_URL=process.env.MONGODB_URL;

mongoose.connect(mongo_URL,{
    useNewUrlParser:true,
    //useNewUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("mongo connected");
});

db.on('disconnected',()=>{
    console.log("mongo disconnected");
});

db.on('error',()=>{
    console.log("mongo internal connection error");
});

module.exports=db;




