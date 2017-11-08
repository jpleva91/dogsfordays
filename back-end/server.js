const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('<h1>Fancy seeing you here.</h1>');
});

app.listen(3000, function() {
	console.log('listening on port 3000');
});