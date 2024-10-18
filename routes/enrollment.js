const express = require('express');
const enrollmentController = require('../controllers/enrollmentController');
const { authenticateToken } = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/:courseId/enroll', authenticateToken, enrollmentController.enrollInCourse);


module.exports = router;
