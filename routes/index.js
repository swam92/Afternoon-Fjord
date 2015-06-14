var express = require('express');
//var request = require('request');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { info: "welcome" });
});

router.get('/information', function(req,res,next){
	res.render('information');
});

router.get('/polls', function(req,res,next){
	/*request('http://elections.huffingtonpost.com/pollster/api/charts/obama-job-approval.json', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
  		console.log(body);
    	res.render('polls', {info: body});
  	}
})
	*/
	res.render('polls');
});

router.get('/news', function(req,res,next){
	res.render('news');
});

//https://sunlightlabs.github.io/congress/bills.html#votes

module.exports = router;
