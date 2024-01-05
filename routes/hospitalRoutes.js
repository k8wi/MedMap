const express = require("express");
const {
    getHospitalsByAny,
    getAllHospitals,
    getHospitalsByType,
    getHospitalsByCategory
} = require("../controllers/hospitalController");


const router = express.Router();

// Get hospital by ID||GET
router.get("/byid/:any", getHospitalsByAny);

//GET ALL hospitals ||GET
router.get("/getall", getAllHospitals);

// Get hospital by Category ||GET
router.get("/bycat/:category", getHospitalsByCategory);

// Get hospital by Type ||GET
router.get("/bytype/:type", getHospitalsByType);

module.exports = router;
