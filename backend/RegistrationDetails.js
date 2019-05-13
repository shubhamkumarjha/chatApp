// /backend/RegistrationDetails.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// this will be our data base's data structure
const DataSchema = new Schema(
{
id: Number,
firstName: String,
lastName: String,
userName: String,
password: String,
phoneNumber: Number,
email: String,
isOnline: Boolean
},
{ timestamps: true }
);
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Registration", DataSchema);