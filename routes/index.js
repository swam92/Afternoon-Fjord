var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { info: "welcome" });
});

//https://sunlightlabs.github.io/congress/bills.html#votes

module.exports = router;
