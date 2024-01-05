const hospitalModel = require("../models/hospitalModel");



const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await hospitalModel.find();
    res.status(200).json({
      success: true,
      message: "Hospitals fetched successfully",
      hospitals,
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

//GET HOSPITALS BY CATEGORY
const getHospitalsByCategory = async (req, res) => {
  try {
    const hospitals = await hospitalModel.find({
      category: req.params.category,
    });

    if (hospitals.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Hospitals not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hospitals fetched successfully",
      hospitals,
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


//GET HOSPITALS BY TYPE
const getHospitalsByType = async (req, res) => {
  try {
    const hospitals = await hospitalModel.find({
      type: req.params.type,
    });

    if (hospitals.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Hospitals not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hospitals fetched successfully",
      hospitals,
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

//GET HOSPITAL BY NAME, CATEGORY or TYPE ||GET
const getHospitalsByAny = async (req, res) => {
  try {
    const { any } = req.params;

    const hospitals = await hospitalModel.find({
      $or: [
        { name: { $regex: new RegExp(any, "i") } },
        { category: { $regex: new RegExp(any, "i") } },
        { type: { $regex: new RegExp(any, "i") } },
      ],
    });

    if (hospitals.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Hospitals not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hospitals fetched successfully",
      hospitals,
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

  //GET HOSPITALS BY CATEGORY
module.exports = { getAllHospitals, getHospitalsByAny, getHospitalsByCategory,getHospitalsByType };
