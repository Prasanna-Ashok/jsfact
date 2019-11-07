const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    type: String,
    title: String,
    description: String,
    teacher: String
});
const courses = mongoose.model('courses', courseSchema);

module.exports = courses;
