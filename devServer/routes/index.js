var express = require('express');
var router = express.Router();
var fs = require('fs');

let productData = require('../data/product.root.js');

//建置static html page
router.post('/', function(req, res, next) {

	var path = 'public/' + req.body.name + '.html';

	fs.unlink(path, function(){

		setTimeout(function(){
			fs.writeFile( path, req.body.data, function (err) {
				if (err) throw err;
				console.log('Saved: ' + req.body.name + '.html' );
			});
		}, 1000);

	});

	res.json({ ok : 1});
});

//讀取所有一般頁面
router.get('/', function(req, res, next) {

	if(req.query.name)
		res.render(req.query.name, { data: productData['product_light_1'] } );
});

module.exports = router;
