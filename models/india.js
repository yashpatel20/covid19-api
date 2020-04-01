const mongoose = require("mongoose");

const indiaSchema = mongoose.Schema({
  State: String,
  Cases: String,
  Deaths: String,
  Recovered: String
});

indiaSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("India", indiaSchema);
