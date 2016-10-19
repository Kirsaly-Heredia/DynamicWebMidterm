//project entry point
var express=require('express');
var handlebars = require('express3-handlebars')

var app = express();

var portNum = 8888;
app.set('port', portNum);

app.use(express.static(__dirname + '/public'));

// set up handlebars view engine
app.engine('handlebars', handlebars({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');


//site routes-----------------------
app.get('/', function(req, res){
  res.send('home');
});

app.get('/explore', function(req, res){
  res.send('explore');
});

app.get('/suggest', function(req, res){
  res.send('suggest');
});

// custom 404 page
app.use(function(req, res, next){
  res.status(404);
  res.render('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500 - Server Error');
});


app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:'
  app.get('port') + '; press Ctrl-C to terminate.' );
});
