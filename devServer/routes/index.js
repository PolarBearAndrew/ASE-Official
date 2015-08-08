var express = require('express');
var router = express.Router();
var fs = require('fs');

var contentData = require('../data/content.root.js');
var appbar = require('../data/appbar.js');

//建置static html page
router.post('/', function(req, res, next) {

    console.log('post');

    var path = 'public/' + req.body.name + '.html';

    fs.unlink(path, function() {

        setTimeout(function() {
            fs.writeFile(path, req.body.data, function(err) {
                if (err) throw err;
                console.log('Saved: ' + req.body.name + '.html');
            });
        }, 1000);

    });

    res.json({
        ok: 1
    });
});

//讀取所有一般頁面
router.get('/:url', function(req, res, next) {

    let page = req.query.page || 'home';
    let name = req.query.name || 'home';
    let data = contentData[name.toString()];

    if(name === 'home'){
        page = 'home';
    }else if(name.indexOf('service') != -1){
        page = 'service';
    }

    res.render(page, {
        data: data,
        appbar: appbar,
    });
});

module.exports = router;
