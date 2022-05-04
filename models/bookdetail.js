const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    rego :String,
    colour :String,
    date :String,
    name :String,
    email :String,
    phone :Number,
    contactname :String,
    contactphone :Number,
    pickupaddress :String,
    pickupsuburb :String,
    deliveryname :String,
    deliveryphone :Number,
    deliveryaddress :String,
    deliverysuburb :String,
})

module.exports = mongoose.model("Detail",detailSchema);