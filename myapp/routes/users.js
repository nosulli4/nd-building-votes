var express = require('express');
//var request = require('request');
var router = express.Router();

function updateClient(postData){
    var clientServerOptions =  {
        uri: 'http://student04.cse.nd.edu:51042',
        body: JSON.stringify(postData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response){
        console.log(error, response.body);
        return;
    })
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
