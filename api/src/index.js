const app = require("./app.js");
const  sequelize  = require("./config/db");

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);

  sequelize
    .sync({ force: false })
    .then(async () => {

      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});