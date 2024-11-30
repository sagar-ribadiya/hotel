const express=require('express');
const Router=express.Router();
const menu=require('./../models/menuitems');


Router.get('/',async(req,res)=>{
    try{
        const responce=await menu.find();
        console.log("data fached");
        res.status(200).json(responce);

    }catch(error){
        console.log(error);
        res.status(404).json({error:"internal server error"});

    }
})

Router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newmenu=new menu(data);
        const response=await newmenu.save();
        console.log("data saved menu");
        res.status(200).json(response);


    }catch(error){
        console.log(error);
        res.status(404).json({error:"internal server error"});

    }
})
Router.get('/:testetype',async(req,res)=>{
    try{
  
        const testetype=req.params.testetype;
        if(testetype == "sweet" || testetype == "spicy" || testetype == "sour"){
            const response=await menu.find({teste:testetype});
            console.log("data faches");
            res.status(200).json(response);
        }else{
            res.status(404).json({error:"data not found"});
        }
        }catch(error){
        console.log(error);
        res.status(404).json({error:"internal server error"});
        }
})

Router.put('/:id',async(req,res)=>{
    try{
        const menuid=req.params.id;
        const updatedmenu=req.body;
        const response=await menu.findByIdAndUpdate(menuid,updatedmenu,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(400).json({error:'menu not found'});
        } 
        console.log("data updeted");
        res.status(200).json(response);

    }catch(error){
        console.log(error);
        res.status(404).json({error:'internal server error'});

    }
})

Router.delete('/:id',async(req,res)=>{
    try{
    const menuid=req.params.id;
    const response=await menu.findByIdAndDelete(menuid);
    if(!response){
        res.status(400).json({error:'person not found'});
    }
    else{
        console.log("menu deleted");
        res.status(200).json(response);
    }
    }catch(error){
        console.log(error);
        res.status(404).json({error:'internal server error'});

    }

})

module.exports=Router;
