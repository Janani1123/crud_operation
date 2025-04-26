const Student = require('../models/students.model')

// Create
const addStudent = async (req, res) => {
    const { name } = req.body
    try {
        await Student.create({ name })
        res.status(201).json({ message: "Student added successfully" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Read
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json({ students })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Update
const updateStudent = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    try {
        await Student.findByIdAndUpdate(id, { name })
        res.status(200).json({ message: "Student updated" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Delete
const deleteStudent = async (req, res) => {
    const { id } = req.params
    try {
        await Student.findByIdAndDelete(id)
        res.status(200).json({ message: "Student deleted" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
}
