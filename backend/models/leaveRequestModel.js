const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  dateOfLeave: {
    type: Date,
    required: true,
  },
  reason: String,
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Denied'],
    default: 'Pending',
  },
  hodComment: String,
});

const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);

module.exports = LeaveRequest;
// the end
