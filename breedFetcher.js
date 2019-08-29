const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // console.log('Huh oh, error:', error);
      callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      // console.log('\n' + breed.description + '\n');
      callback(null, breed.description);
    } else {
      callback(null, `Breed not found... Is ${breedName} even a cat?`);
    }
  });
};

module.exports = { fetchBreedDescription };