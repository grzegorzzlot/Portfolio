const passport = require('passport');
const { Strategy } = require('passport-local');
const user = require('../loginData')

module.exports = function localStrategy () {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        }, (username, password, done) => {
            if(username===user.username && password===user.password) {
                done(null, user);
            } 
            else {
                done(null, false);
            }        
        }
    ));
}