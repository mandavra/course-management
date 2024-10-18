// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Middleware to authenticate the user
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};

module.exports = { authenticateToken };
