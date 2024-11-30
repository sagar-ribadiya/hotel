const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

router.get('/',async(req,res)=>{
    try{
       
        const responce=await Person.find();
        console.log("data fatched");
        res.status(200).json(responce);

    }catch(error){

        console.log(error);
        res.status(404).json({error:'internal server error'});

    }
    
    
})

router.post('/',async(req,res)=>{
  try{
    const data=req.body;
    const newPerson=new Person(data);
    const responce=await newPerson.save();
    console.log("data saved succsessfully");
    res.status(200).json(responce);
  }catch(error){
     console.log(error);
     res.status(404).json({error:'internal server error'});
  }
})
router.get('/:worktype',async(req,res)=>{
    try{
        const worktype=req.params.worktype;
        if(worktype == "chef" || worktype == "manager" || worktype == "waiter"){
            const response=await Person.find({work:worktype});
            console.log("data fached");
            res.status(200).json(response);

        }else{
            res.status(500).json({error:"data not match"});
        }
    }catch(error){
        console.log(error);
        res.status(404).json({error:'internal server error'});

  }
     
})




module.exports=router;