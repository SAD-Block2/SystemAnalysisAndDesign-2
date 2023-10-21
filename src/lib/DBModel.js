const Sequelize = require("sequelize");

const sequelize = new Sequelize("db_sad2", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

const User = require("../model/User")(sequelize);
function createUsers(payload) {
    User.create(payload).then((users)=>{
        return users;
    })
}

exports.createUsers = createUsers;