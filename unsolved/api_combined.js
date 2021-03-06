
let apiChoice = process.argv[2].toLowerCase();
console.log(process.argv)

let yelpFunction = require('./yelp_api.js');
let ytFunction = require('./youtube_api.js');
let gcFunction = require('./geocoder_api.js');


if(apiChoice == 'yelp'){
  yelpFunction();
}else if(apiChoice == 'youtube'){
  ytFunction();
}else if(apiChoice == 'geocoder'){
  gcFunction();
}else{
  console.log("Please use Yelp, YouTube, or Geocoder")
};
