const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../db/user-model');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: keys.secret
}

passport.serializeUser((user, done) =>{
    console.log(user+ ' in serialize fn');
    done(null, {_id: user._id});
});

passport.deserializeUser((id, done) =>{
    User.findById(id).then((user) =>{
        console.log(user + ' in deserialize fn');
        done(null, user);
    });
});

passport.use(new JwtStrategy(options, function(jwt_payload, done){
    const jwt_userId = jwt_payload._doc._id;
    User.findById(jwt_userId, (err, user) =>{
        if(err){
            done(err, false);
        }
        if(user){
            done(null, user);
        }
        else{
            done(null, false);
        }
    });
})
);

passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL:'/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) =>{
    console.log(profile.emails[0].value);
    console.log(accessToken);
    
    User.findOne({googleId:profile.id}).then((currentUser) =>{
        console.log("==>")
        if(currentUser){
            console.log('user is'+ currentUser);
            done(null, currentUser);
        } else {
            new User({
                googleId: profile.id,
                username: profile.displayName,
                email: profile.emails[0].value
            }).save().then((newUser) =>{
                console.log('Created new user:' + newUser);
                done(null, newUser);
            });
        
        }
    }); 
}));