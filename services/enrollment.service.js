// services/enrollmentService.js
const Enrollment = require('../models/Enrollment.model');
const Course = require('../models/Course.model');

// Enroll a user in a course
const enrollInCourse = async (userId, courseId) => {
  const course = await Course.findById(courseId);
  if (!course) throw new Error('Course not found');

  const existingEnrollment = await Enrollment.findOne({ userId, courseId });
  if (existingEnrollment) throw new Error('User already enrolled in this course');

  const newEnrollment = new Enrollment({ userId, courseId });
  await newEnrollment.save();

  return newEnrollment;
};

module.exports = { enrollInCourse };
