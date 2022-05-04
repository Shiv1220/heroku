const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    pickup :String,
    delivery :String,
})

module.exports = mongoose.model("Data",dataSchema);
