// const express = require('express')
// const passport = require('passport')
// const router = express.Router()

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });

// require('../passport/google')

// router.get('/auth/google',
//     passport.authenticate('oauth2'));

// router.get('/auth/google/callback',
//     passport.authenticate('oauth2', { failureRedirect: '/login' }),
//     function(req, res) {
//         res.redirect('/');
//     });

// module.export = router;