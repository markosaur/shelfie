//need to require packages and controller file
const express= require('express');
const app= express();
const ctrl= require('./controller'); 

app.use(express.json())

//this is where the endpoints will go, we will add these later


const port= 4000;
app.listen(port, ()=> console.log(`Here comes the sun ${port}`))