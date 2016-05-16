var express = require('express');
var path = require('path');

var app = express();

// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
// define routes

app.get('/', function (req, res) {
  res.render('hello world');
});

app.listen(3000, function () {
  console.log('ready on port 3000');
});
