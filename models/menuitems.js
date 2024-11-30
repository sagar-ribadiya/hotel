const mongoose=require('mongoose');

const manuitems=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    teste:{
        type:String,
        enum:['sweet','spicy','sour']
    }
})



const menu=mongoose.model('menu',manuitems);
module.exports=menu;