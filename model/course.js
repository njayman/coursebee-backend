const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    category: { type: String },
    docUrl: { type: String },
    videoUrl: { type: String }
})

const CourseSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    date: { type: Date, default: Date.now },
    videos: { type: [VideoSchema], default: [] }
})

module.exports = mongoose.model('Course', CourseSchema);