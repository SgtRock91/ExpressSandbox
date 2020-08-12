var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
      cars: [{
        vin: 123
      }, {
        vin: 987
      }]
  })
});

module.exports = router;
