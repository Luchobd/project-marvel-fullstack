const axios = require("axios");
const Comic = require("../models/Comic.js");

async function getApiInfoComic() {
  try {
    const apiInfo = await axios.get(
      "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=8ff49ecba06674843badef63176ffc10&hash=ce6b16b3ec6765eb487fb088ca375b91"
    );
    const apiURL = apiInfo.data.data.results.map((comic) => comic.title);
    apiURL.forEach((e) => {
      Comic.findOrCreate({ where: { title: e } });
    });
    return apiURL;
  } catch (error) {
    console.log(error);
  }
}

getApiInfoComic();

module.exports = {
  getApiInfoComic,
};
