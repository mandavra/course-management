const express = require('express');
const courseController = require('../controllers/courseController');
const { authenticateToken, authorizeAdmin } = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/add',  courseController.createCourse);
router.get('/get', courseController.getCourses);
router.put('/:courseId',  courseController.updateCourse);
router.delete('/:courseId',courseController.deleteCourse);

module.exports = router;
