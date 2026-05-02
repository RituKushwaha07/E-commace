const express = require("express");
const router = express.Router();
const {saveAddress, getAddresses} = require("../controllers/addressController");

router.post("/add", saveAddress);
router.get("/:userId", getAddresses);




module.exports = router;