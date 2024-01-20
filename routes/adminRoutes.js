const express = require("express");
const authMiddelware = require("../middlewares/authMiddleware");
const {
  getAllUsers,
  deleteUserController,
  deleteHospitalController,
  registerController
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//Routes


//GET || USER LIST
router.get(
  "/users",
  //authMiddelware,
  //adminMiddleware,
  getAllUsers
);

// DELETE User || GET
router.delete(
  "/delete-user/:id",
  //authMiddelware,
  //adminMiddleware,
  deleteUserController
);

// DELETE HOSPITAL || GET
router.delete(
    "/delete-hospital/:id",
    //authMiddelware,
    //adminMiddleware,
    deleteHospitalController
  );

router.post("/add-hospital",
//authMiddleware,
//adminMiddleware,
registerController)  
//EXPORT
module.exports = router;
