const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { type: String },
    fullname: { type: String },
    email: { type: String },
    phone: { type: String },
    institute: { type: String },
    facebook: { type: String },
    background: { type: String },
    about: { type: String },
    password: { type: String },
    interest: [],
    date: { type: Date, default: Date.now },
    verified: { type: Boolean, default: false }
})

module.exports = mongoose.model('User', UserSchema);