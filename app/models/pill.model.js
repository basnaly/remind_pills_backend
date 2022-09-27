const mongoose = require("mongoose");

const Pill = mongoose.model(
    "Pill",
    new mongoose.Schema({
        // createUser: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User"
        // },
        name: String,
        form: String,
        strength: Number,
        unit: String,
        amount: Number,
        interval: String,
        note: String
    })
);

module.exports = Pill;