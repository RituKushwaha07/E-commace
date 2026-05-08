const Contact = require("../models/Contact");


const contactController = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json({
            success: true,
            message: "Message Sent Successfully", contact,
        })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}


module.exports = {contactController};