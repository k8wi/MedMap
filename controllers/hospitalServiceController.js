

const hospitalserviceModel = require("../models/hospitalServiceModel");


// Get all services 
const getAll= async (req, res) => {
  try {
    const hospitalservices = await hospitalserviceModel.find();
    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      hospitalservices,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in fetching data",
      error,
    });
  }
};
module.exports = { getAll};
