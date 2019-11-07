const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    email: String
});


const users = mongoose.model('users', userSchema);


module.exports = users;