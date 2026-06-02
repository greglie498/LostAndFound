const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    console.log("Stored password:", foundUser.password);
    console.log("Is hashed:", foundUser.password.startsWith("$2b$"));

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
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
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;