const About = require("../models/About");

const getAbout = async (req, res)=>{
    try {
        const data = await About.findOne();
        res.json(data);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }

}

module.exports = {getAbout};