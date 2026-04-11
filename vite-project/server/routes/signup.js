const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/signup
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    // simple validation
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required"
      });
    }

    // check if username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists"
      });
    }

    // create new user
    const newUser = new User({
      username,
      password
    });

    // save to database
    await newUser.save();

    res.status(201).json({
      message: "Signup successful"
    });
  } catch (error) {
    console.log("Signup error:", error);
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;