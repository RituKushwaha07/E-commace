const express = require("express");
const router = express.Router();
const {getAbout} = require("../controllers/about-controller");

router.get("/about", getAbout);




module.exports = router;