const Sequelize = require("sequelize");

  const sequelize = new Sequelize("db_sad2", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });

  const User = require("../model/User")(sequelize);
  function createUser(payload){
    User.create(payload).then((user)=>{
        return user;
    })
  }

  exports.createUsers=createUser;