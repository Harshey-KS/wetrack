const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Teacher = require("../models/teacherModel");

// Registering a new teacher
exports.registerTeacher = async (req, res) => {
  try {
    const { name, email, type, department, password, contact, classes } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = new Teacher({
      name,
      email,
      type,
      department,
      password: hashedPassword,
      contact,
      classes,
    });
    await teacher.save();
    res
      .status(201)
      .json({ message: "Teacher registered successfully", data: teacher }); //response
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Login Teacher
exports.loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const teacher = await Teacher.findOne({ email }); //searches teacher by this email
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    const validPassword = await bcrypt.compare(password, teacher.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }
    const token = jwt.sign(
      { email: teacher.email, type: teacher.type },
      "your_secret_key",
      { expiresIn: "1h" }
    ); // Change 'your_secret_key' to a more secure secret key
    res
      .status(200)
      .json({
        name: teacher.name,
        email: teacher.email,
        type: teacher.type,
        token: token,
      });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new teacher
exports.createTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    const savedTeacher = await teacher.save();
    res.status(201).json(savedTeacher);
  } catch (error) {
    res.status(500).json({ error: "Could not create teacher" });
  }
};

// Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch teachers" });
  }
};

// Get a teacher by ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch teacher" });
  }
};

// Update a teacher by ID
exports.updateTeacherById = async (req, res) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: "Could not update teacher" });
  }
};

// Delete a teacher by ID
exports.deleteTeacherById = async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndRemove(req.params.id);
    if (!deletedTeacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Could not delete teacher" });
  }
};
