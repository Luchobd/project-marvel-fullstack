const axios = require("axios");
const Character = require("../models/Character.js");
const Comic = require("../models/Comic.js");

async function getApiInfo() {
  try {
    const apiInfo = await axios.get(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=8ff49ecba06674843badef63176ffc10&hash=ce6b16b3ec6765eb487fb088ca375b91"
    );
    // console.log("apiresult",apiInfo.data.data.results);
    const apiURL = apiInfo.data.data.results.map((marvel) => {
      return {
        id: marvel.id,
        name: marvel.name,
        description: marvel.description,
        series: marvel.series.items[0]?.name
          ? marvel.series.items[0]?.name
          : "No tiene series",
        stories: marvel.stories.items[0]?.name
          ? marvel.stories.items[0]?.name
          : "No tiene historia",
        urls: marvel.urls[0].url,
      };
    });
    return apiURL;
  } catch (error) {
    console.log(error);
  }
}

const getDBInfo = async () => {
  return await Character.findAll({
    include: {
      model: Comic,
      attributes: ["title"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllMarvel = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDBInfo();
  const allInfo = [...apiInfo, ...dbInfo];

  return allInfo;
};

module.exports = {
  getApiInfo,
  getDBInfo,
  getAllMarvel,
};
