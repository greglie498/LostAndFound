const express = require("express");
const router = express.Router();
const LostItem = require("../models/LostItems")

//POST /api/lostItems - report a found item

router.post("/", async(req, res)=>{
    try{

        const {itemName, description, location, contact, reportedBy } = req.body;
        console.log("Reported by:", reportedBy);
        console.log("Item received:", itemName); 
        const newItem = new LostItem({itemName, description, location, contact, reportedBy });
        await newItem.save();
            res.status(201).json({
            message:"Lost item reported successfully",
            item: newItem
        });

    } catch (error){
        console.error("Error saving item:", error);
        res.status(500).json({message: "Failed to  report lost item", error: error.message});
    }
});

//GET /api/lostItems - fetch all items, newest first
router.get("/", async (req, res) => {
    try {
        const items = await LostItem.find().sort({ createdAt: -1});
        res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({message: "Failed to fetch lost items", error: error.message});
    }
});

// GET — items by username  ← NEW
router.get("/my-reports/:username", async (req, res) => {
  try {
    const items = await LostItem.find({ reportedBy: req.params.username }).sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch your reports" });
  }
});

module.exports = router;

