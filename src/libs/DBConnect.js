const Sequelize = require("sequelize");
require("dotenv").config();

async function connectToDB() {
  const sequelize = new Sequelize("db_sad2", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
  });

  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established succfessfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
}

exports.connectToDB = connectToDB;
