const mongoose = require('mongoose');

const InstructorSchema = mongoose.Schema({
    username: { type: String },
    fullname: { type: String },
    phone: { type: String },
    institute: { type: String },
    position: { type: String },
    department: { type: String },
    password: { type: String },
    email: { type: String },
    date: { type: Date, default: Date.now },
    interest: [],
    approved: { type: Boolean, default: false }
})

module.exports = mongoose.model('Instructor', InstructorSchema);