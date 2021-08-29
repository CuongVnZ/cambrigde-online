const express = require('express');
const router = express.Router();
const indexCon = require('../controllers/indexController');

var authRouter = require('./auth');

router.use('/', authRouter);

router.get('/user', indexCon.user_get);

module.exports = router;