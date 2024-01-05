const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Service name is required"],
      },
    }
);

module.exports = mongoose.model("services", serviceSchema);
