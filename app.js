const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './pics')));

app.get('/new-pics', (req, res) => {

	// Number of urls to pictures to return.
	const numberPics = 2;

	// Get array of all files in directory.
	let files = fs.readdirSync('./pics');

	let selectedFiles = [];

	// Create array of urls to random pictures in directory.
	for(i=0; i < numberPics; i++){

		// Create a random array index.
		let randomIndex =	Math.floor(Math.random() * (files.length));

		// Add path of random picture to array of picture paths.
		selectedFiles[i] = files[randomIndex];

	};

	// Console log array of picture paths.
	console.log('Sent file paths: ' + selectedFiles);

	// Respond with array as a string.
	res.json(selectedFiles);

});

app.listen(4567, () => {
	console.log('Photos node.js server listening on port 4567.');
});