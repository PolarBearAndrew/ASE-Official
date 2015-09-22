var express = require('express');
var router  = express.Router();

var supply = require('../data/supply.js');

router.get('/', (req, res, next) => {
  res.render('home')
});

router.get('/Supply', (req, res, next) => {

  res.render('Supply', { data: supply} );
});

router.get('/:page', (req, res, next) => {
  res.render(req.params.page.replace(/.html/, ''))
});






module.exports = router;
