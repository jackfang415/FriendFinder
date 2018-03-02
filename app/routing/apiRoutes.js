var match = require("../data/friends")
var express = require("express");
var app = express();

module.exports = function(req, res) {

	app.get("/api/friends", function(req, res) {

		res.json(match);

	});

app.post("/api/friends", function(req, res) {

	console.log("post")
	console.log(req.body)
	var userData = req.body
	var scores = []
	userData.added = true
	res.json(userData)

});

app.post("/api/clear", function(){

	match = [];

});


}