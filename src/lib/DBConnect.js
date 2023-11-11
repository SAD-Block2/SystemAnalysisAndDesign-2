const Sequelize = require("sequelize");
require("dotenv").config();
async function connectToDB() {
<<<<<<< Updated upstream
  const sequelize = new Sequelize("db_sad2", "root", "", {
=======
  const sequelize = new Sequelize("db_socmed", "root", "", {
>>>>>>> Stashed changes
    host: "localhost",
    dialect: "mysql",
  });

  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
}

exports.connectToDB = connectToDB;
