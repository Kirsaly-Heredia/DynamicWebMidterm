var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
 placeName: {type: String, required: true},
 category: {type: String, required: true},
 continent: {type: String, required: true},
 country: {type: String, required: true},
 city: {type: String, required: true},
 address: {type: String, required: true},
 description: {type: String, required: true},
 imageFilename: {type: String, required: true}
});

var Place = mongoose.model('Place', placeSchema);

module.exports = Place;


