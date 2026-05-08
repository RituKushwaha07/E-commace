const Service = require("../models/Service");

// GET SERVICES
 const getServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json({success: true,services, });

  } catch (error) {
    res.status(500).json({success: false,message: error.message,});
  }
};


module.exports = {getServices};