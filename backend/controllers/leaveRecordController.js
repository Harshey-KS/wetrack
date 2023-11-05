const LeaveRecord = require("../models/leaveRequestModel");

// Create a new leave record
exports.createLeaveRecord = async (req, res) => {
  try {
    const leaveRecord = new LeaveRecord(req.body);

    const savedLeaveRecord = await leaveRecord.save();
    res.status(201).json(savedLeaveRecord);
  } catch (error) {
    res.status(500).json({ error: "Could not create leave record" });
  }
};

// Get all leave records
exports.getAllLeaveRecords = async (req, res) => {
  try {
    const leaveRecords = await LeaveRecord.find({
      teacherId: req.params.teacherId,
    }).populate("teacherId");
    res.status(200).json(leaveRecords);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch leave records" });
  }
};

// Get a leave record by ID
exports.getLeaveRecordById = async (req, res) => {
  try {
    const leaveRecord = await LeaveRecord.findById(req.params.id);
    if (!leaveRecord) {
      return res.status(404).json({ error: "Leave record not found" });
    }
    res.status(200).json(leaveRecord);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch leave record" });
  }
};

// Update a leave record by ID
exports.updateLeaveRecordById = async (req, res) => {
  try {
    const updatedLeaveRecord = await LeaveRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLeaveRecord) {
      return res.status(404).json({ error: "Leave record not found" });
    }
    res.status(200).json(updatedLeaveRecord);
  } catch (error) {
    res.status(500).json({ error: "Could not update leave record" });
  }
};

// Delete a leave record by ID
exports.deleteLeaveRecordById = async (req, res) => {
  try {
    const deletedLeaveRecord = await LeaveRecord.findByIdAndRemove(
      req.params.id
    );
    if (!deletedLeaveRecord) {
      return res.status(404).json({ error: "Leave record not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Could not delete leave record" });
  }
};
