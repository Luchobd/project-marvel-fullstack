const Character = require("./Character")
const Comic = require("./Comic")


Comic.belongsToMany(Character, { through: "character_comic" });
Character.belongsToMany(Comic, { through: "character_comic" })