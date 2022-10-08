const mongoose = require("mongoose");

const Log = mongoose.model(
    "Log",
    new mongoose.Schema({
        medicineId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Medicine"
        },
        date: String,
        time: String,
        quantity: String,
    })
);

module.exports = Log;