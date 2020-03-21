const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
  State: String,
  "Total Confirmed cases (Indian National)": Number,
  "Total Confirmed cases ( Foreign National )": Number,
  "Cured/Discharged/Migrated": Number,
  Death: Number
});

stateSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("State", stateSchema);
