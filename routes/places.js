//  places routes

var express = require('express');
var router = express.Router();

var path = require('path');

var multer = require('multer');
var uploadPath = path.join(__dirname, '../public/uploads');
var upload = multer({ dest: uploadPath});

var Place = require('../models/place');

router.get('/suggest', function (req, res) {
  res.render('suggest');
});

router.post('/suggest', upload.single('image'), function (req, res) {
  var place = new Place({
    placeName: req.body.placeName,
    category: req.body.category,
    continent: req.body.continent,
    country: req.body.country,
    city: req.body.city,
    address: req.body.address,
    description: req.body.description,
    imageFilename: req.file.filename
  });

  place.save(function (err, data) {
    if (err) {
      console.log(err);
      return res.render('505', {layout: 'plain_views'});
    }

    return res.render('submitted', {layout: 'plain_views'});
  });
});

router.get('/explore', function (req, res) {
  var query = {};
  if (req.query.country) {
    query = {country: req.query.country};
  }
  Place.find(query, function (err, data) {
    var pageData = {
      places: data
    };
    res.render('explore', pageData);
  });

});
  
module.exports = router;