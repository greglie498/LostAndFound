const mongoose = require("mongoose");

const userSchema = new.mongoose.Schema({
    username:{
        type:String,
        require: true,
        unique: true,
        trim: true,
        minilength: 3
    },
    password: {
        type: String,
        require: true,
        minilength: 6
    }
});

module.exports = mongoose.model("User", userSchema);