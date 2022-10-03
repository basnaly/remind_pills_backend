const mongoose = require("mongoose");

const Medicine = mongoose.model(
    "Medicine",
    new mongoose.Schema({
        // createUser: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User"
        // },
        name: String,
        form: String,
        quantity: Number,
        strength: Number,
        unit: String,
        packAmount: Number,
        frequency: String,
        interval: String,
        time: String,
        weekDay: String,
        note: String
    })
);

module.exports = Medicine;