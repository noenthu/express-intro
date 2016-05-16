var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/static', express.static(path.join(__dirname, 'bower_components')));

var todosRoute = require('./routes/todos');
app.use('/todos', todosRoute);


app.listen(3000, function () {
  console.log('ready on port 3000');
});
