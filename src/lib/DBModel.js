const Sequelize= require("sequelize");

//async function connectToDB
const sequelize = new Sequelize("tbl_sad2", "root", "123456",{
    host: "localhost",
    dialect: "mysql",
});

const User = require( "../model/user")(sequelize);

function createUsers(payload) {
    User.create(payload).then(user)=> {
        return user;
    });
}

exports.createUsers = createUsers;
