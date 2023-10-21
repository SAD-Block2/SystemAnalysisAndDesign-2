const Sequelize = require("sequelize");
const User = require("../model/User");

  const sequelize = new Sequelize("db_sad2", "root", "", {
    host: "localhost",
    dialect: "mysql",
    });

const User = require("../mode/User")(sequelize);

function createUsers(payload) {
  User.create(payload).then((user)=>{
    return user;
  });
}



exports.createUser = createUsers;

