const mongoose = require("mongoose");

const worldSchema = mongoose.Schema({
  Country: String,
  Cases: String,
  Deaths: String,
  Recovered: String
});

worldSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("World", worldSchema);
