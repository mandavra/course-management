// controllers/courseController.js
const courseService = require('../services/course.service');

// Create a new course (admin only)
const createCourse = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });

  try {
    const course = await courseService.createCourse(req.body, req.user.userId);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all courses (available to all users)
const getCourses = async (req, res) => {
  try {
    const courses = await courseService.getCourses();
    res.json(courses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing course (admin only)
const updateCourse = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });

  try {
    const course = await courseService.updateCourse(req.params.courseId, req.body);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a course (admin only)
const deleteCourse = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });

  try {
    await courseService.deleteCourse(req.params.courseId);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createCourse, getCourses, updateCourse, deleteCourse };
