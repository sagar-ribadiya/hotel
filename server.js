const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json());


const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("welcome to my hotel");
})

const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);


const menuroutes=require('./routes/menuroutes');
app.use('/menu',menuroutes)




app.listen(PORT,()=>{
    console.log('server is running');
})