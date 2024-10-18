// middleware/adminMiddleware.js
const { authenticateToken } = require('./authMiddleware');

// Middleware to check if the user is an admin
const authorizeAdmin = (req, res, next) => {
  // First authenticate the token using the authMiddleware
  authenticateToken(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = { authorizeAdmin };
