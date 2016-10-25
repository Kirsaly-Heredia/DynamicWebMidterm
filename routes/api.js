var express = require('express');
var router = express.Router();

var Place = require('../models/place');

router.get('/', function (req, res) {
  res.render('home', {layouts: 'plain_views'});
});

router.post('/place', function (req, res, next) {
  
  var place = new Place({
    placeName: req.body.placeName,
    category: req.body.category,
    continent: req.body.continent,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    description: req.body.description,
    imageFilename: req.file.imageFilename
  });

  place.save(function (err, data) {
    if (err) {
      console.log(err);
      res.status(500);
      return res.render('500', {layout: 'plain_views'});
    }
    
    return res.json({
      status: 'ok',
      message: 'created new place',
      place: data
    });
      
  });

});

router.get('/place', function (req, res, next) {
  Place.find({}, function (err, data) {
    if (err) {
      res.status(500);
      return res.render('500', {layout: 'plain_views'});
    }
    
    return res.json(data);
  });
});

module.exports = router;