const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/checkUsername', (req, res) => {
    User.exists({ username: req.body.username }, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/checkEmail', (req, res) => {
    User.exists({ email: req.body.email }, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/addUser', async (req, res) => {
    try {
        User.exists({ username: req.body.username }, function (err, result) {
            if (err) {
                res.send(err)
            } else {
                if (!result) {
                    User.exists({ email: req.body.email }, function (err, result) {
                        if (err) {
                            res.send(err)
                        } else {
                            if (!result) {
                                const user = new User({
                                    username: req.body.username,
                                    fullname: req.body.fullname,
                                    email: req.body.email,
                                    phone: req.body.phone,
                                    password: req.body.password,
                                    institute: req.body.institute,
                                    background: req.body.background,
                                    about: req.body.about,
                                    interest: req.body.interest
                                })
                                user.save()
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