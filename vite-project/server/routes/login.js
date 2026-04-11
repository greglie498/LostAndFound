const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (foundUser.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: foundUser._id,
        username: foundUser.username,
        role: foundUser.role
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;