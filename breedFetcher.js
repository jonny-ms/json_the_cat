const request = require("request");
const breedName = process.argv[2];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

request(URL, (error, response, body) => {
  if (error) console.log('Huh oh, error:', error);
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log('\n' + breed.description + '\n');
  } else {
    console.log(`Breed not found... Is ${breedName} even a cat?`);
  }
});