const express = require('express')
const router = express.Router()
const {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
} = require('../controller/student.controller')

// Routes
router.post('/add', addStudent)
router.get('/all', getAllStudents)
router.put('/update/:id', updateStudent)
router.delete('/delete/:id', deleteStudent)

module.exports = router
