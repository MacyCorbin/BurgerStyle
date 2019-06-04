//Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgersController.js');
app.use('/', router);

// Open Server on localhost:3000
var port = process.env.PORT || 3000;
app.listen(port);