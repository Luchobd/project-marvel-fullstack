const Character = require("../models/Character");
const {
  getAllMarvel,
  getDBInfo,
  getApiInfo,
} = require("../functions/characters.api.js");
const { getComics } = require("../functions/comic.api.js");
const Comic = require("../models/Comic");

// GET
const getCharacters = async (req, res) => {
  try {
    const allMarvel = await getAllMarvel();
    res.status(200).json(allMarvel);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// GET ID
const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    getAllMarvel().then((data) => {
      let marvelId = data.filter((mar) => {
        return mar.id === id;
      });
      marvelId.length
        ? res.status(200).json(marvelId)
        : res.status(404).send("there is no super hero");
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// POST
const postCharecter = async (req, res) => {
  const { name, description, series, stories, urls, title } = req.body;
  try {
    const createSuperHero = { name, description, series, stories, urls, title };
    // console.log(createSuperHero)
    const marvel = await Character.create(createSuperHero);
    // let comicDB = await Comic.findAll({
    //   where: { title: Comic },
    // });
    // marvel.addComic(comicDB);
    // console.log(marvel)
    res.status(200).json(createSuperHero);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// PUT
const updateCharacter = async (req, res) => {
  const { id } = req.params;
  const { name, description, series, stories, urls, title } = req.body;
  try {
    const marvelFind = Character.findByPk(id);
    if (marvelFind) {
      Character.update(
        { name, description, series, stories, urls, title },
        {
          where: {
            id,
          },
        }
      );
    }
    res.status(200).json(marvelFind);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// Delete
const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    await Character.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Delete Super Hero");
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getCharacters,
  getCharacter,
  postCharecter,
  updateCharacter,
  deleteCharacter,
};
