const geocoder = require ('google-geocoder');
const googleKey = "AIzaSyC8dhspcTXMwBZS-gOrCtIiPEKXzvywO2Y"

let geo = geocoder({
  key: googleKey
})

const inquirer = require('inquirer')

module.exports = (arg1) => {
inquirer.prompt([
  {
    type: 'input',
    message: 'Enter a City',
    name: 'Location'
  },
  // {
  //   type: 'input',
  //   message: 'Enter a Country',
  //   name: 'Location2'
  // }
]).then(function(answers){
  console.log(answers)

    let results = geo.find(answers.Location, function(err, data){
      console.log(data[0].formatted_address)
      console.log(data[0].location)
    })

  });
};
