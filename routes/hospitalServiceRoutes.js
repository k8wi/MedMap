const express = require("express");
const {
    getAll
} = require("../controllers/hospitalserviceController");


const router = express.Router();


// Get services by Hospital ||GET
router.get("/getall/", getAll);



module.exports = router;
