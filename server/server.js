const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const passportSetup = require('./passport/passport-setup');
//require('./passport/passport-setup')(passport);
const keys = require('./passport/keys');
const authRoutes = require('./auth/routes');
const courses = require('./db/course-model');
const enrolls = require('./db/enroll-model');
const request = require('request');
var jsSHA = require("jssha");

const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.dbURL, () => {
    console.log('connected to mongodb');
});
mongoose.Promise = global.Promise;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/courses/:input', (req, res, next) => {
    courses.findOne({type : req.params.input}).then((course) =>{
        if(course){
            res.send(course);
        } else{
            console.log('error');
        }
        next();
    });
});

app.get('/enroll/:input', (req, res, next) =>{
    enrolls.findOne({title: req.params.input}).then((enroll) =>{
        if(enroll){
            res.send(enroll);
        }else{
            console.log('error');
        }
        next();
    })
})

app.post('/payment', function (req, res, next) {
    if (!req.body.amount || !req.body.firstname || !req.body.email) {
        res.send("Mandatory fields missing");
        next();
    } else {
        var pd = req.body;
        var hashString = keys.payumoney.key  
        + '|' + pd.txnid 
        + '|' + pd.amount + '|' + pd.productinfo + '|'          
        + pd.firstname + '|' + pd.email + '|' +'||||||||||' 
        + keys.payumoney.salt;
        var sha = new jsSHA('SHA-512', "TEXT");
        sha.update(hashString)
        var hash = sha.getHash("HEX");
        res.send({ 'hash': hash });
        next();
    } });
    
app.post('/payment/response', function (req, res, next) {
    var pd1 = req.body;
    var hashString = keys.payumoney.salt + '|' + pd.status + '||||||||||'+'|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + keys.payumoney.key;
    var sha = new jsSHA('SHA-512', "TEXT");
    sha.update(hashString)
    var hash = sha.getHash("HEX");
    if (hash == pd.hash) {
        console.log(pd);
        // res.send({'status':pd.status});
        res.send({'data': pd});
       
        next();
    } else {
        res.send({'status':"Error occured"});
        next();
    }
});


app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log('App listening to port' + PORT);
});