const mongoose = require("mongoose");

const hospitalserviceSchema = new mongoose.Schema(
  {
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospitals",
        required: [true, "hospital is requied"],
        
    },

    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "services",
        required: [true, "service is requied"],
      },
    }
 );

module.exports = mongoose.model("hospitalservice", hospitalserviceSchema );


