// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// // passport.serializeUser(function(user, done) {
// //     done(null, user);
// // });

// // passport.deserializeUser(function(user, done) {
// //     done(null, user);
// // });

// passport.use(new GoogleStrategy({
//         clientID: "456947796697-0m9dqggpq3m5se6re7qig3kluds213ff.apps.googleusercontent.com",
//         clientSecret: "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",
//         callbackURL: "http://localhost:3000/google/callback"
//     },
//     function(accessToken, refreshToken, profile, done) {
//         console.log('profile: ', profile);
//         return done(new Error('Working on it...'))
//             // return done(null, profile);
//     }
// ));