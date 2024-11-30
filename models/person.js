const mongoose=require('mongoose');

const newPerson=new mongoose.Schema({
    Name:{
        type:String,
        Required:true
    },
    Mobile:{
        type:Number,
        Required:true
    },
    Age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    }

})
const Person=mongoose.model('person',newPerson);
module.exports=Person;



