const api = require('../services/api');
const fs = require('fs');

module.exports.user_get = function (req, res) {
    res.send(req.user);
}