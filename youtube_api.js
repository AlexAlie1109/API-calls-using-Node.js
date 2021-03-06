let userInput = process.argv.slice(3).join(" ")

const request = require('youtube-search');
const googleKey = "AIzaSyC8dhspcTXMwBZS-gOrCtIiPEKXzvywO2Y"

module.exports = (arg1) => {
let results = {
  maxResults: "5",
  key: googleKey,
};

  request(userInput, results, function(err, results){
    if(err) return console.log(err);
      results.forEach((videos, i) => {
        console.log("-----Choice" + i++ + "-----" )
        console.log("Link:" + " " + videos.link);
        console.log("Title:" + " " + videos.title);
        console.log("Description:" + " " +  videos.description);
    });
  });
};
