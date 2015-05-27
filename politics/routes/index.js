var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('request');
var api = require('sunlight-congress-api')

representativesDatabase = mongoose.model('RepresentativesContact');


/* GET home page. */
router.get('/', function(req, res, next) {

	var url = "http://openstates.org/api/v1/legislators/?apikey=f8f5270cbe6a457398849e49d1b46070"
	
	request({
    	url: url,
    	json: true
	}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        res.render('index', { info: body });
    }
	
	})//end request

});

//https://sunlightlabs.github.io/congress/bills.html#votes

module.exports = router;
