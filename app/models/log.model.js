const mongoose = require("mongoose");

const Log = mongoose.model(
    "Log",
    new mongoose.Schema({
        medicine: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Medicine"
        },
        date: Date,
        time: String,
    })
);

module.exports = Log;