const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

const Character = sequelize.define("Character", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  series: {
    type: DataTypes.STRING,
  },
  stories: {
    type: DataTypes.STRING,
  },
  urls: {
    type: DataTypes.STRING,
  },
});

module.exports = Character

// const { DataTypes, Model } = require("sequelize");
// const sequelize = require("../config/db.js");

// class Payments extends Model {}
// Payments.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     subject: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   { sequelize, modelName: "payments", timestamps: false }
// );

// module.exports = Payments;