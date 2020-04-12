const mongoose = require("mongoose");

const indiaTsSchema = mongoose.Schema({
  Date: String,
  Cases: String,
  Deaths: String,
  Recovered: String,
});

indiaTsSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("IndiaTS", indiaTsSchema);
