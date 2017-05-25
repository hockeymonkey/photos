const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

request('http://localhost:4567/new-pics', function(err, res, body){
	
	let pictures = JSON.parse(body);
	
	request('http://localhost:4567/' + pictures[0]).pipe(fs.createWriteStream('./downloaded/test.jpg'));

});