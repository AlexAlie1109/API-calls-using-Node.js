// var searchLimit = "5"


const inquirer = require('inquirer');
const request = require('yelp-fusion');
const yelpKey = "TrnUkRqduHm7FLAb639uPW1z1wXnaIFDSh7Ei-xHqINogvcuEL1NfJr0cURaNX0U7YJMWuVRMOEe4Ha-EkDpsLdZchbYRNXmo6vsDSgmPhoNLn-BjT4vkjHDmLj3X3Yx"

module.exports = () => {
  inquirer.prompt([
    {
      type: "confirm",
      message: "Does your gf know what to eat?",
      name: "confirm",
      default: "true"
    },
    {
      type: "input",
      message: "Type of Food?",
      name: "food"
    },
    {
      type: "input",
      message: "Location?",
      name: "location"
    }
  ]).then(function(answers){
    console.log(answers)
    if(answers.confirm === "n"){

          let client = request.client(yelpKey);

          client.search({
            term: answers.food,
            location: answers.location,
          }).then(response => {
            // console.log(response)

          let results = JSON.parse(response.body)
          // console.log(results);

          results.businesses.forEach((choices, i) => {
              console.log("-----Option" + i++ + "-----")
              console.log(choices.name)
              console.log(choices.price)
              console.log(choices.phone)
              console.log(choices.is_closed)
          });


          }).catch(e => {
            console.log(e);
          });
    }else if (answers.confirm === "y"){
      console.log("Must be Nice");
    }
  });
};






// let results = response.jsonBody.businesses
// results.forEach((choices, i) => {
//   console.log(choices.jsonBody.businesses.name);
//   // console.log(response.jsonBody.businesses[0].rating);
//   // console.log(response.jsonBody.businesses[0].price);
//   // console.log(response.jsonBody.businesses[0].phone);
//   // console.log(response.jsonBody.businesses[0].is_closed);
//
// // console.log(choices.name)
// });
