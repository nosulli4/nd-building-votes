var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/',index.index );
router.get('/zoom',index.zoom);
router.get('/nd',index.nd);
router.get('/debart',index.debart);
router.get('/dome',index.dome);
router.get('/fitzpatrick-cushing',index.fitzCushing);
router.get('/stinson-remick',index.stinRem);
router.get('/map',index.map);

module.exports = router;