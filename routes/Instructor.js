const express = require('express');
const router = express.Router();
const Course = require('../model/course');

//get all courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses);
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/addCourse', async (req, res) => {
    try {
        console.log(req.body)
        const course = new Course({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        })
        await course.save()
        res.json(course)
    } catch (err) {
        res.json({ message: err })
    }
})



module.exports = router;