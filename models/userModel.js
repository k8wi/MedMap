const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
   
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["admin", "user"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "user" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
    
    

    phone: {
      type: String,
      required: [true, "phone numbe is required"],
      unique: true,
    },
    gender: {
      type: String, // You can choose other types like 'String', 'Number', 'Enum', etc. based on your requirements
      enum: ['M', 'F', 'Other'], // Optional: If you want to restrict the values to a specific set
      // You can customize this based on your requirements
    },
    
    dateOfBirth: {
      type: Date, // You can choose 'Date' type for date of birth
      // You can customize this based on your requirements
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
