require("dotenv").config();
require("./models/associations.js")

const morgan = require("morgan");
const express = require("express");
const cors = require("cors");


const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", require("./routes/characters.routes.js"))

app.use("/", require("./routes/comic.routes.js"))




module.exports = app;
