const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  stat: {
    type: String,
  },

  color: {
    type: String,
  },

  link: {
    type: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);