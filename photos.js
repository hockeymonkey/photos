const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Send get request to server and receive an string array of urls to pictures.
request('http://localhost:4567/new-pics', function(err, res, body){
	
	// Parse picture url strings.
	let pictures = JSON.parse(body);
	
	// For each picture url in array, download and save picture to local directory.
	for(i=0; i < pictures.length; i++){

		request('http://localhost:4567/' + pictures[i]).pipe(fs.createWriteStream('./downloaded/testdownload' + i + '.jpg'));

	};

	console.log("Done!");

});