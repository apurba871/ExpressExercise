var express = require('express');
var app = express();

//Routes

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.listen(3000, function() {
	console.log("Server started successfully, listening app on port 3000");
});