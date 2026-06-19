const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model(
  "Enquiry",
  enquirySchema
);