const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./db");
const Enquiry = require("./models/Enquiry");

dotenv.config();
console.log(process.env.MONGO_URI);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/enquiry", async (req, res) => {
  try {
    console.log("Received request:", req.body);
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const enquiry = new Enquiry({
      name,
      email,
      phone,
    });

    await enquiry.save();

    console.log("Enquiry saved successfully");
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server running on port ${process.env.PORT || 5000}`
  );
});