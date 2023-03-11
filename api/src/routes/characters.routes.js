const { Router } = require("express");
const {
  getCharacters,
  postCharecter,
  deleteCharacter,
  getCharacter,
  updateCharacter,
} = require("../controllers/characters.controller.js");
const router = Router();

router.get("/characters", getCharacters);
router.get("/characters/:id", getCharacter);
router.post("/characters", postCharecter);
router.put("/characters/:id", updateCharacter);
router.delete("/characters/:id", deleteCharacter);

module.exports = router;
