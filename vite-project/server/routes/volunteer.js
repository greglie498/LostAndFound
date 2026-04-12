const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

// POST - register as volunteer
router.post("/", async (req, res) => {
    try{
        const {username, fullName, email, phone, availability} = req.body;

        //check if already registered
        const existing = await Volunteer.findOne({ username });
        if (existing) {
            return res.status(409).json({ message: "You are already registered as a volunteer!"});
        }

        const newVolunteer  = new Volunteer({ username, fullName, email, phone, availability });
        await newVolunteer.save();

        res.status(201).json({ message: "Successfully registered as a volunteer! "});
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;