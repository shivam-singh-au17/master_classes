require("dotenv").config()
const passport = require('passport')
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const User = require("../model/user.model");

passport.use('provider',
    new OAuth2Strategy(
        {
            authorizationURL: 'https://www.provider.com/oauth2/authorize',
            tokenURL: 'https://www.provider.com/oauth2/token',
            clientID: 'process.env.GOOGLE_CLIENT_ID',
            clientSecret: 'process.env.GOOGLE_CLIENT_SECRET',
            callbackURL: 'http://localhost:5432/auth/provider/callback'
        },
        function (accessToken, refreshToken, profile, done) {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            // });
            console.log(accessToken, refreshToken, profile);
            return done(null, "user");
        }
    )
);