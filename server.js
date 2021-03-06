var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var sql = require('mssql');
var configDetails = require('./config');
var dbConnectionStatus = false;
// console.log(configDetails);

var app = express();

//db connection
sql.connect(configDetails.dbConfig, function(err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
		dbConnectionStatus = true;
	}
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());


var port = process.env.PORT || configDetails.portNumber.port; // set our port

var sparkfly = require('./sparkfly');
var users = require('./users');
var prism = require('./prism');
var fortinet = require('./fortinet');


app.use('/sparkfly', sparkfly);
app.use('/users', users);
app.use('/prism', prism);
app.use('/fortinet', fortinet);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);