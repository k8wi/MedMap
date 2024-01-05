const express = require("express");
const {
    getAllServices
} = require("../controllers/serviceController");


const router = express.Router();


// Get services by Hospital ||GET
router.get("/getall/", getAllServices);



module.exports = router;
