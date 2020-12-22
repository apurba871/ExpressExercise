var express = require('express');
var app = express();

//Routes

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
	var animal = req.params.animal;
	var sound, flag = 0;
	if (animal === "pig")
		sound = "Oink";
	else if (animal === "cow")
		sound = "Moo";
	else if (animal === "dog")
		sound = "Woof Woof";
	else if (animal === "cat")
		sound = "Meow"
	else if (animal === "sheep")
		sound = "Mehahah"
	else
		flag = 1;
	if (!flag)
		res.send("The " + animal + " says '" + sound + "'");
	else
		res.send("Animal not found");
});

app.get("/repeat/:word/:times", function(req, res) {
	var word = req.params.word;
	var times = Number(req.params.times);
	var str;
	if (times > 0) {
		str = word;
		for (var i = 1; i < times; ++i) {
			str += " " + word;
		}
		res.send(str);
	} else {
		res.send();
	}
});

app.get("*", function(req, res) {
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function() {
	console.log("Server started successfully, listening app on port 3000");
});