var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send({
      cars: [{
        vin: '111',
        make: 'GMC',
        model: 'Sierra'
      }, {
        vin: '222',
        make: 'GMC',
        model: 'Canyon'
      }, {
        vin: '333',
        make: 'Acura',
        model: 'RDX'
      }]
  })
});

module.exports = router;
