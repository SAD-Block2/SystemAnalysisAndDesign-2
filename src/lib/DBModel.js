const Sequelize = require("sequelize");

  const sequelize = new Sequelize("db_sad2", "root", "", {
    host: "localhost",
    dialect: "mysql",
  }); 

  const User = require("../model/user");
  function createUsers(payload) {
    User.create(payload).then((user)=>{
        return user;
    })
  }

  

exports.createUsers=createUsers;
