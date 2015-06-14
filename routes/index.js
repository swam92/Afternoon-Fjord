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
		request('http://api.nytimes.com/svc/search/v2/articlesearch.json?q=jeb+bush+hillary+clinton&sort=newest&api-key=a243d1a3bb2631b740343a2128465629:0:43533076', function (error, response, body) {
  	if (!error && response.statusCode == 200) {
  		var parsedResponse = JSON.parse(body)
  		var localResponse = parsedResponse.response
		var articles = localResponse["docs"] 
  		articles.forEach(function (article){
  			console.log(article.headline.main);
  		})

  		res.render('news', {articles: articles});

  	}
});
});

//https://sunlightlabs.github.io/congress/bills.html#votes

module.exports = router;
