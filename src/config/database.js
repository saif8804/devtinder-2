const mongoose = require("mongoose");

const conectDB = async() =>{
     mongoose.connect("mongodb://localhost:27017");
}


module.exports = conectDB;