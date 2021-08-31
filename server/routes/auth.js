const express = require('express');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const router = express.Router();
const authCon = require('../controllers/authController');

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
router.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
router.use(cookieParser("secretcode"));
router.use(passport.initialize());
router.use(passport.session());

require("../services/passport-config")(passport);
//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

router.post("/login", authCon.user_login);
router.post("/register", authCon.user_register);
router.get("/logout", authCon.user_logout)

module.exports = router;