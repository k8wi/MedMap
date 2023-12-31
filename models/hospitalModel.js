var mongoose = require("mongoose");
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Hospital name is required"],
      },
   
    type: {
      type: String,
      required: [true, "type is requied"],
    },
    location: {
      type: String,
      required: [true, "location is requied"],
    },
  
      rating: {
        type: SchemaTypes.Double,
        required: [true, "rating is required"],
      },
    address: {
        type: String,
        required: [true, "address is required"],
      },  
    lattitude: {
        type: SchemaTypes.Double,
        required: [true, "lat is required"],
      },  
      longitude: {
        type: SchemaTypes.Double,
        required: [true, "long is required"],
      },  
      map: {
        type: String,
        required: [true, "map is required"],
      },    

  },
 
);

module.exports = mongoose.model("hospitals", hospitalSchema);
