var GoogleStrategy = require('passport-google-oauth20').Strategy;
const user = require('../model/user');
const clientId = require('../config/googleData').clientId;
const clientSecreT = require('../config/googleData').clientSecret;

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: clientId,
        clientSecret: clientSecreT,
        callbackURL: "http://localhost:8000/google/callback"
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile.emails[0].value);

        // find if a user exist with this email or not
        user.findOne({ email: profile.emails[0].value }).then((data) => {
            if (data) {
                // user exists
                // update data
                // I am skipping that part here, may Update Later
                return done(null, data);
            } else {
                // create a user
                user({
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    password: null,
                    provider: 'google',
                    isVerified: true,
                }).save(function (err, data) {
                    return done(null, data);
                });
            }
        });
    }
    ));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        user.findById(id, function (err, user) {
            done(err, user);
        });
    });

}