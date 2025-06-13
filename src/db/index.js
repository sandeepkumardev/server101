const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database is not connected!");
    console.error("error:- ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
