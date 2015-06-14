var express = require('express');
var request = require('request');
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
	var api_key = 's_557cdf1d6cd93557cdf1d6ce08557cdf1d6ce7b',
    url = 'cnn.com/politics';

    //"https://embedkit.com/api/v1/extract?url=<required>&api_key=<SECRET>")

    request('https://embedkit.com/api/v1/extract?url='+url+'&api_key='+api_key, function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body);
  		}
	});

	request('https://embedkit.com/api/v1/embed?api_key='+api_key+'&url='+url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body);
	  }
	});    

	request('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=jeb+bush+hillary+clinton&sort=newest&api-key=a243d1a3bb2631b740343a2128465629:0:43533076', function (error, response, body) {

  		if (!error && response.statusCode == 200) {
  			var parsedResponse = JSON.parse(body)
  			var localResponse = parsedResponse.response
			var articles = localResponse["docs"] 
  			res.render('news', {articles: articles});
  		}
	});
});

//https://sunlightlabs.github.io/congress/bills.html#votes

module.exports = router;
