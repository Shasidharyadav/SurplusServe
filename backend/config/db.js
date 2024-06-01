const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  // Log the MONGO_URI for debugging
  console.log('MONGO_URI:', mongoUri);

  if (!mongoUri) {
    console.error('MONGO_URI is not defined in the environment variables');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
