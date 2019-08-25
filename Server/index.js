//need to require packages and controller file
require('dotenv').config()
const express= require('express');
const massive= require('massive')
const shoeCtrl= require('./controller'); 

const app= express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

//middleware

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('connected to database')
    })
    .catch(err => console.log(err));


// this is where the endpoints will go, we will add these later
app.get('/api/inventory',shoeCtrl.getShoe)
app.post('/api/inventory',shoeCtrl.createShoe)


app.use(express.json())


// const port= 4000;
app.listen(SERVER_PORT, ()=> {
    console.log(`Here comes the sun ${SERVER_PORT}`)
})