const express = require('express');

const mongoose = require('mongoose');
require('dotenv'). config();

const app = express();

const port= 5000;

app.get('/', (req, res)=> {

    res.send("This is the Home Page");

});

app.get('/About', (req, res)=> {

    res.send("This is what we do");

})

app.get('/Contact', (req, res)=> {

    res.send("Here is our telephone number and email address");

});

app.get('/page', (req, res)=> {

    res.send("<h1>Welcome</h1><p>This is a simple Home page</p>");

});

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("MonngoDB connected"))
.catch(err => console.log(err));

app.listen(port, ()=>{

    console.log("Server is running on port 5000");
    console.log("This is what we do");
    console.log("Here is our Telephone number and email address");
})