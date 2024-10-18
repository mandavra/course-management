// models/Course.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  lessons: [
    {
      title: { type: String, required: true },
      content: { type: String, required: true }
    }
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);
