const {getApiInfoComic} = require("../functions/comic.api.js");
const Comic = require("../models/Comic.js");

const getComics = async (req, res) => {
  try {
    const allComic = await Comic.findAll()
    res.status(200).json(allComic);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getComics };