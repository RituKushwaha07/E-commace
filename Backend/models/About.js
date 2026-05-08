const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  stats: [
    {
      label: String,
      value: String
    }
  ],
  features: [
    {
      title: String,
      description: String
    }
  ],
  team: [
    {
      name: String,
      role: String,
      image: String
    }
  ]
});

module.exports = mongoose.model("About", aboutSchema);