const express = require('express');
const router = express.Router();
const Course = require('../model/course');

//get all courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find()
        res.send(courses);
    } catch (err) {
        res.send({ message: err })
    }
})

//get all courses
router.get('/course/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        res.send(course);
    } catch (err) {
        res.send({ message: err })
    }
})

//add a course
router.post('/addCourse', async (req, res) => {
    try {
        console.log(req.body)
        const course = new Course({
            title: req.body.title,
            description: req.body.description,
            //category: req.body.category
        })
        await course.save()
        res.send("Successfully added " + course.title)
    } catch (err) {
        res.send({ message: err })
    }
})

router.delete('/deleteCourse/:id', async (req, res) => {
    try {
        const course = await Course.findByIdAndRemove(req.params.id)
        res.send("Successfully deleted")
    } catch (err) {
        res.send({ message: err })
    }
})



module.exports = router;