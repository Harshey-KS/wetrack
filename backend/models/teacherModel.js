const mongoose = require('mongoose');

const examTimelineSchema = new mongoose.Schema({
  examDate: {
    type: Date,
  },
  description: {
    type: String,
  },
});

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  portionCovered: {
    type: String,
    default: '',
  },
  examTimeline: [examTimelineSchema], // Add the examTimeline field
});

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['Teacher', 'HOD'], // Enum to specify the type
    default: 'Teacher',// Default to 'Teacher'
    required: true,
    },
    department: {
      type: String,
    },
    password: String,
  contact: String,
  classes: [classSchema],
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
