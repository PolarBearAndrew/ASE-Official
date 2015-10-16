var express = require('express');
var router  = express.Router();

var data = require('../data');

router.get('/', (req, res, next) => {
  res.render('home')
});

router.get('/Supply', (req, res, next) => {

  res.render('Supply', { data: data.supply} );
});

router.get('/Fix-all', (req, res, next) => {

  res.render('Fix-all', { data: data.fix} );
});

router.get('/:page', (req, res, next) => {
  res.render(req.params.page.replace(/.html/, ''))
});


module.exports = router;
