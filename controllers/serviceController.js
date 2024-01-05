

const serviceModel = require("../models/serviceModel");


// Get all services 
const getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.find();
    res.status(200).json({
      success: true,
      message: "Services fetched successfully",
      services,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in fetching hospitals",
      error,
    });
  }
};
module.exports = { getAllServices};
