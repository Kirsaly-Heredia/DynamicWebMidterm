//  places routes

var express = require('express');
var router = express.Router();

var path = require('path');

var multer = require('multer');
var uploadPath = path.join(__dirname, '../public/uploads');
var upload = multer({ dest: uploadPath});

var Place = require('../models/place');

router.get('/add', function (req, res) {
  res.render('suggest');
});

router.post('/add', upload.single('image'), function (req, res) {
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
      return res.redirect(303, '/');
    }

    return res.redirect(303, '/explore');
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