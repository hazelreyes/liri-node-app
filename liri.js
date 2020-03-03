require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var movieName = process.argv[2];

for (let i = 2; i < arguments.length; i++) {
    movieName += movieName[i];
}

var concertQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"