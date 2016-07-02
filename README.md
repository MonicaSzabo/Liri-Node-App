# Liri-Node-App
Language Interpretation and Recognition Interface using Node

### To utilize this app:

- node liri.js my-tweets
	-  Pulls up my 20 most recent tweets

- node liri.js spotify-this-song "song title"
	-  Will pull up the top request with this song title from Spotify
	-  If no song title is given, defaults to What's My Age Again by Blink 182

- node liri.js movie-this "movie title"
	-  Will pull up the top request with this movie title from OMDb
	-  If no movie title is given, defaults to Mr. Nobody

- node liri.js do-what-it-says
	-  Will analyze the file "random.txt" and do one of the top 3 actions, depending what the file says
	-  File must be formated as **action, "movie/song"** (movie/song not needed if twitter request)


- Needs a keys.js file with your Twitter Keys, currently in the gitignore file for privacy purposes
- log.txt saves the most recent searches to it