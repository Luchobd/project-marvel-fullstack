const { Router } = require("express");
const { getComics } = require("../controllers/comics.controller.js");
const router = Router();

router.get("/comics", getComics);

module.exports = router;