// controllers/enrollmentController.js
const enrollmentService = require('../services/enrollment.service');

// Enroll a user in a course
const enrollInCourse = async (req, res) => {
  try {
    const enrollment = await enrollmentService.enrollInCourse(req.user.userId, req.params.courseId);
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



module.exports = { enrollInCourse };
