require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME_DEVELOPMENT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: false,
});

// const sequelize = new Sequelize('sqlite::memory:', {
//   define: {
//     freezeTableName: true
//   }
// }); para hace conincidir todos los modelos con las tablas
module.exports = sequelize;
