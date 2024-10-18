// controllers/authController.js
const authService = require('../services/auth.service');

// User registration
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await authService.register(name, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// User login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await authService.login(email, password);
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { register, login };
