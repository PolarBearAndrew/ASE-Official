var express = require('express');
var router = express.Router();
var fs = require('fs');

let data = require('../data/root.js');

//建置static html page
router.post('/', function(req, res, next) {

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
router.get('/', function(req, res, next) {

    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('dtat',  data['index'])
    console.log('')
    console.log('')
    console.log('')
    console.log('')

    if (req.query.page)
        res.render(req.query.page, {
            appbar: data.appbar,
            data: data['index'],
        });
});

module.exports = router;
