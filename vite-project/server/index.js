const express = require('express');
const  cors = require("cors")

const mongoose = require('mongoose');
require('dotenv'). config();
const connectDB = require("./config/db")

const app = express();

//connect to MongoDB
connectDB();

// import routes
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

//Middleware
app.use(cors());
app.use(express.json());

// connect routes
app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);
app.use("/api/lostItems", require("./routes/lostItems"));
app.use("/api/volunteer", require("./routes/volunteer"));
// test route
app.get("/", (req, res) => {
    res.send("API is running");
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("This is what we do");
    console.log("Here is our Telephone number and email address");
})

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



