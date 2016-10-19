var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
 placeName: String,
 category: String,
 continent: String,
 country: String,
 city: String,
 address: String,
 imageFilename: String
});

var Place = mongoose.model('Place', placeSchema);
module.exports = Place;