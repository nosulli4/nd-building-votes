var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

let index = require('../controllers/index')
//const app = require('../app');
var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('./votes.json', function(req, res){
    console.log('receiving data ...');
    console.log('body is ', req.body);
    res.send(req.body);
  });

/* GET home page. */
router.get('/',index.index);
router.get('/zoom',index.zoom);
router.get('/nd',index.nd);
router.get('/debart',index.debart);
router.get('/dome',index.dome);
router.get('/fitzpatrick-cushing',index.fitzCushing);
router.get('/stinson-remick',index.stinRem);
router.get('/quiz',index.quiz);
router.get('/map',index.map);

module.exports = router;
