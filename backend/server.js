const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const foodItemRoutes = require('./routes/foodItemRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();

// Initialize Express
const app = express();

// Connect to Database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/fooditems', foodItemRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
