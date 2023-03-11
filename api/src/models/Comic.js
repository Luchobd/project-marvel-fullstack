const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Comic = sequelize.define("Comic", {
  title: {
    type: DataTypes.STRING,
  },
});

module.exports = Comic;
