var friends = require("../data/friends")

console.log(friends);

module.exports = function(app) {

app.get("/api/friends", function(req, res) {

res.json(friends);

});

	app.post("/api/friends", function(req, res) {
		
		var userInput = req.body
		var scoreDifference = 1000000;
		var bestFriend = {};


		for (var i=0; i<friends.length;i++) {
			var difference = 0;

			for (var j=0; j<friends[i].scores.length; j++) {
				difference += Math.abs(parseInt(friends[i].scores[j] - parseInt(userInput.scores[j])));
				if(difference<scoreDifference) {
					scoreDifference = difference;
					bestFriend.name = friends[i].name;
					bestFriend.photo = friends[i].photo;
				}
			}

		}

		friends.push(userInput);
		res.json(bestFriend);

	});


app.post("/api/clear", function(){

	friends = [];

});


}