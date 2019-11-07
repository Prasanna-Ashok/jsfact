const express = require ('express');
const app = express.Router();
const User = require('../db/user-model');
const passport = require('passport');
const passportStrategy = require('../passport/passport-setup');
const jwt = require('jsonwebtoken');
const keys = require('../passport/keys');


app.use(passport.initialize());


app.get('/google', passport.authenticate('google', {
    scope: ['email']
}));

app.get('/google/redirect', passport.authenticate('google'),(req,res) => {
    console.log("User Dataa :", req.user);
    var payload = {
        username : req.user.username,
        googleID : req.user.googleId
    }
    const token = jwt.sign(payload, keys.secret, {
        expiresIn: 10080 //seconds
    });
     res.redirect('http://localhost:3000');
    console.log('redirect url');
});


app.get('/logout', (req, res) =>{
    res.logout();
    res.send('success');
});

module.exports = app;