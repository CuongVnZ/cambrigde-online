const mongoose = require("mongoose");
const express = require("express");
const app = express();
//----------------------------------------- END OF IMPORTS---------------------------------------------------

require('./services/database')

// Middleware

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
var router = require('./routes');
app.use('/', router);
//----------------------------------------- END OF ROUTES---------------------------------------------------

//Start Server
app.listen(4000, () => {
  console.log("Server has started");
});