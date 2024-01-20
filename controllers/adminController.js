const userModel = require("../models/userModel");
const hospitalModel = require("../models/hospitalModel");

//GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
      const users = await userModel.find();
      res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        users,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error in fetching users",
        error,
      });
    }
  };
  //DELETE HOSPITAL
  const deleteHospitalController = async (req, res) => {
    try {
      await hospitalModel.findByIdAndDelete(req.params.id);
      return res.status(200).send({
        success: true,
        message: " Hospital Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error while deleting ",
        error,
      });
    }
  };

//DELETE USER
  const deleteUserController = async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      return res.status(200).send({
        success: true,
        message: " User Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error while deleting ",
        error,
      });
    }
  };

  //REGISTER HOSPITAL
  
const registerController = async (req, res) => {
    try {
      const exisitingHospital = await hospitalModel.findOne({ name: req.body.name });
      //validation
      if (exisitingHospital) {
        return res.status(200).send({
          success: false,
          message: "Hospital ALready exists",
        });
      }
      
      //rest data
      const hospital = new hospitalModel(req.body);
      await hospital.save();
      return res.status(201).send({
        success: true,
        message: "Hospital Registerd Successfully",
        hospital,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Register API",
        error,
      });
    }
  };
  
module.exports = { getAllUsers,deleteUserController,deleteHospitalController,registerController};
