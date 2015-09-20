var express = require('express');
var router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('home')
});

router.get('/:page', (req, res, next) => {
  res.render(req.params.page.replace(/.html/, ''))
});

module.exports = router;
