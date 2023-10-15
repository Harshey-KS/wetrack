const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Route for registering a new teacher
//post,body
router.post('/register', teacherController.registerTeacher);

// Route for logging in a teacher
//post, body
router.post('/login', teacherController.loginTeacher);

// Create a new teacher
router.post('/', teacherController.createTeacher);

// Get all teachers
router.get('/', teacherController.getAllTeachers);

// Get a teacher by ID
router.get('/:id', teacherController.getTeacherById);

// Update a teacher by ID
router.put('/:id', teacherController.updateTeacherById);

// Delete a teacher by ID
router.delete('/:id', teacherController.deleteTeacherById);

module.exports = router;
