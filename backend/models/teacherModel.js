const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  portionCovered: {
    type: String,
    default: '',
  },
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
  contact: String,
  classes: [classSchema],
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
