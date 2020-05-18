const express = require('express');
const router = express.Router();
const Instructor = require('../model/instructor');

router.get('/getInstructors', async (req, res) => {
    try {
        const instructor = await Instructor.find()
        res.send(instructor)
        console.log(instructor)
    } catch (error) {
        res.send(error)
    }
})

router.get('/getInstructor/:id', async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id)
        res.send(instructor);
    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router;