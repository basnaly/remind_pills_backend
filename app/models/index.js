const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {}; //create object for db

db.mongoose = mongoose;

//db.user = require("./user.model");
db.medicine = require("./medicine.model");
db.log = require("./log.model");

module.exports = db;