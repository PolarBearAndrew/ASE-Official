var express = require('express');
var router  = express.Router();

router.get('/LED', (req, res, next) => {
  res.render('LED')
});

module.exports = router;
