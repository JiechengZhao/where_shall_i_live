var express = require('express')
var router = express.Router()
var http = require('http')
var concat = require('concat-stream')
var beautify = require('js-beautify').js_beautify
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})


router.get('/map/search',function(req,res){
  http.get('http://sh.zu.anjuke.com'+req.originalUrl,function(hres){
    res.set(hres.headers)
    hres.pipe(res);
  }).on('error',function(e){
    console.log('Got error:' + e.message)
  })
})

router.get('/anjuke/*',function(req,res){
  http.get('http://sh.zu.anjuke.com/'+req.originalUrl.slice(8),function(hres){
    res.set(hres.headers)
    hres.pipe(res);
  }).on('error',function(e){
    console.log('Got error:' + e.message)
  })
})


module.exports = router
