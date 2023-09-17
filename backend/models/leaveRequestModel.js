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
  leavetype: {
    type: String,
    enum: ['Sick Leave','Other'],
    required:true,
  },
  reason: String,
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Denied'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);

module.exports = LeaveRequest;
// the end
