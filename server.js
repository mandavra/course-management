// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import routes
const authRoutes = require('./routes/auth.route');
const courseRoutes = require('./routes/course.route');
const enrollmentRoutes = require('./routes/enrollment');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());


// Replace this part of your code:
mongoose.connect('mongodb+srv://man:rL6LlQQ9QYjhQppV@cluster0.yxujymc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove the useFindAndModify option
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Course Management System API is running...');
});

// Set server port from environment or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
