const express = require('express');
const router = express.Router();
const leaveRecordController = require('../controllers/leaveRecordController');

// Create a new leave record
router.post('/', leaveRecordController.createLeaveRecord);

// Get all leave records
router.get('/', leaveRecordController.getAllLeaveRecords);

// Get a leave record by ID
router.get('/:id', leaveRecordController.getLeaveRecordById);

// Update a leave record by ID
router.put('/:id', leaveRecordController.updateLeaveRecordById);

// Delete a leave record by ID
router.delete('/:id', leaveRecordController.deleteLeaveRecordById);

module.exports = router;
