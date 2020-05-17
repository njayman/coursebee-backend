const express = require('express');
const router = express.Router();
const Instructor = require('../model/instructor');

router.get('/getInstructors', (req, res) => {
    try {
        const instructor = Instructor.find()
        res.send(instructor)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;