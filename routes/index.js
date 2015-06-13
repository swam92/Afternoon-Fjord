var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { info: "welcome" });
});

router.get('/information', function(req,res,next){
	res.render('information');
});

router.get('/polls', function(req,res,next){
	res.render('polls');
});

router.get('/news', function(req,res,next){
	res.render('news');
});

//https://sunlightlabs.github.io/congress/bills.html#votes

module.exports = router;
