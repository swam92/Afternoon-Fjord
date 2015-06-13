var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('request');
var api = require('sunlight-congress-api')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { info: "welcome" });
});

//https://sunlightlabs.github.io/congress/bills.html#votes

module.exports = router;
