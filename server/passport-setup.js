const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async(email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'No user with that email' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new localStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize
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