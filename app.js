var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var price = require('./routes/price');
var Price = require('./models/Price');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/angulartask', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  {
	  console.log('connection succesful');
	  
   console.log('collection removed');
   Price.collection.drop();
var p = new Price;
	  p.WinePrice.push(120);
	  p.WinePrice.push(114);
	  p.WinePrice.push(108.30);
	  p.WinePrice.push(64.98);
	  p.WinePrice.push(61.73);
	  p.WinePrice.push(58.64);
	  p._id=1;
	  p.label="A";
	  p.save();
	  p = new Price;
	  p.WinePrice.push(344);
	  p.WinePrice.push(309.60);
	  p.WinePrice.push(294.12);
	  p.WinePrice.push(250);
	  p.WinePrice.push(150);
	  p.WinePrice.push(67.50);
	  p._id=2;
	   p.label="B";
	   p.save();
	  p = new Price;
	  p.WinePrice.push(33);
	  p.WinePrice.push(31.35);
	  p.WinePrice.push(29.78);
	  p.WinePrice.push(28.29);
	  p.WinePrice.push(26.88);
	  p.WinePrice.push(25.53);
	  p._id=3;
	   p.label="C";
	   p.save();
	  p = new Price;
	  p.WinePrice.push(45);
	  p.WinePrice.push(42.75);
	  p.WinePrice.push(38.48);
	  p.WinePrice.push(36.55);
	  p.WinePrice.push(34.72);
	  p.WinePrice.push(32.99);
	  p._id=4;
	   p.label="D";
	   p.save();
	  p = new Price;
	  p.WinePrice.push(331);
	  p.WinePrice.push(314.45);
	  p.WinePrice.push(298.73);
	  p.WinePrice.push(253.92);
	  p.WinePrice.push(241.22);
	  p.WinePrice.push(229.16);
	  p._id=5;
	   p.label="E";
	   p.save();
	  p = new Price;
	  p.WinePrice.push(65);
	  p.WinePrice.push(39);
	  p.WinePrice.push(37.05);
	  p.WinePrice.push(35.20);
	  p.WinePrice.push(33.44);
	  p.WinePrice.push(31.77);
	  p._id=6;
	   p.label="F";
	  p.save();   

	  
	  
  })
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, '/dist/angulartask')));
app.use('/prices', express.static(path.join(__dirname, '/dist/angulartask')));
app.use('/price', price);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;