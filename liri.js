var keys = require('./keys.js');

var action = process.argv[2];

switch(action) {
	case "my-tweets":
		myTwitter();
		break;
	case "spotify-this-song":
		console.log("this is where the spotify part goes")
		break;
	case "movie-this":
		console.log("this is where the movie part goes")
		break;
	case "do-what-it-says":
		console.log("this is where the do what it says part goes")
		break;
}

function myTwitter() {
	var Twitter = require('twitter');

	var client = new Twitter(keys.twitterKeys);

	console.log(client.options);
 
	var params = {screen_name: 'moszabo'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	    console.log(tweets);
	  } else {
	  	console.log(error);
	  }
	});

}