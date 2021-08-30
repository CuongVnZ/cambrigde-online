const passport = require("passport");
const User = require("../services/database/user");
const bcrypt = require("bcryptjs");

module.exports.user_login = function (req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
            });
        }
    })(req, res, next);
}

module.exports.user_register = function (req, res) {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
}

module.exports.logout = function(req, res) {
    req.logout();
    res.redirect('login');
}

module.exports.checkAuthenticated = function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('login');
}

module.exports.checkNotAuthenticated = function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}