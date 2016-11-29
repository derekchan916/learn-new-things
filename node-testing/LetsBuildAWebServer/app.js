const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

//Middleware
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
	next();
});

//Template engine
app.set('view engine', 'ejs');

//Method Request
app.get('/', function(req, res) {
	res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	// res.send(`<html><body><h1>${req.params.id}</h1></body></html>`);
	res.render('index', {
		ID: req.params.id,
		Qstr: req.query.qstr
	});
});

app.get('/api', function(req, res) {
	res.json({firstName: 'Derek', lastName: 'Chan'});
});

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you');
	console.log(req.body.firstName);
	console.log(req.body.lastName);
});

app.post('/personjson', jsonParser, function(req, res) {
	res.send('thank you for the json data');
	console.log(req.body.firstName);
	console.log(req.body.lastName);
});

app.listen(port);
