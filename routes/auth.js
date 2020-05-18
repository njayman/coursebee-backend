const express = require('express');
const router = express.Router();
const Instructor = require('../model/instructor');

router.post('/checkUsername', (req, res) => {
    Instructor.exists({ username: req.body.username }, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/checkEmail', (req, res) => {
    Instructor.exists({ email: req.body.email }, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/addInstructor', async (req, res) => {
    try {
        Instructor.exists({ username: req.body.username }, function (err, result) {
            if (err) {
                res.send(err)
            } else {
                if (!result) {
                    Instructor.exists({ email: req.body.email }, function (err, result) {
                        if (err) {
                            res.send(err)
                        } else {
                            if (!result) {
                                const instructor = new Instructor({
                                    username: req.body.username,
                                    fullname: req.body.fullname,
                                    email: req.body.email,
                                    phone: req.body.phone,
                                    password: req.body.password,
                                    institute: req.body.institute,
                                    position: req.body.position,
                                    interest: req.body.interest
                                })
                                instructor.save()
                                res.json("Success")
                            } else {
                                res.send("An account with this email address already exists")
                            }
                        }
                    })
                } else {
                    res.send("username already exists")
                }
            }
        })
    } catch {
        res.send("error")
    }
})


module.exports = router;