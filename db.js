const mongoose=require('mongoose');

const mongo_URL='mongodb://127.0.0.1:27017'

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




