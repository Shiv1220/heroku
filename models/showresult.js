const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    make :String,
    year :Number,
    model :String,
    name :String,
    email :String,
    phonenumber :Number
})

module.exports = mongoose.model("Result",resultSchema);