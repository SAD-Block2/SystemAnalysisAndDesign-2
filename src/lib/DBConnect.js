const Sequelize = require(id: "sequelize");
require(id: "dotenv").config();

async function connectToDB() Promise<void> {
  const sequelize = new Sequelize("db_sad2", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });
  const User = require(id: "../model/User")(sequelize);
  const Post = require(id: "../model/Post")(sequelize);

  User.hasMany(Post);
  Post.belongsTo(User);

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
