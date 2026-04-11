const express = require('express');
const  cors = require("cors")

const mongoose = require('mongoose');
require('dotenv'). config();
const connectDB = require("./config/db")

const app = express();

//connect to MongoDB
connectDB();

// import routes
const signRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

//Middleware
app.use(cors());
app.use(express.json());

// connect routes
app.use("/api/signup", signRoute);
app.use("/api/login", loginRoute);

// test route
app.get("/", (req, res) => {
    res.send("API is running");
})

const port= 4000;

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