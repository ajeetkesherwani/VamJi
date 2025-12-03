// src/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected successfully with host: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection failed:");
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
