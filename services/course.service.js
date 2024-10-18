// services/courseService.js
const Course = require('../models/Course.model');

// Create a new course
const createCourse = async (courseData, adminId) => {
  const { title, description, lessons } = courseData;
  
  const newCourse = new Course({
    title,
    description,
    lessons,
    createdBy: adminId
  });

  await newCourse.save();
  return newCourse;
};

// Get all courses
const getCourses = async () => {
  return await Course.find().populate('createdBy', 'name email');
};

// Update an existing course
const updateCourse = async (courseId, courseData) => {
  const updatedCourse = await Course.findByIdAndUpdate(courseId, courseData, { new: true });
  if (!updatedCourse) throw new Error('Course not found');
  return updatedCourse;
};

// Delete a course
const deleteCourse = async (courseId) => {
  const course = await Course.findByIdAndDelete(courseId);
  if (!course) throw new Error('Course not found');
  return course;
};

module.exports = { createCourse, getCourses, updateCourse, deleteCourse };
