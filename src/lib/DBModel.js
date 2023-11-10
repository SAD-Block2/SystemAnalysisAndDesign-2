const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_sad2", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

const User = require("../model/User")(sequelize);

function createUsers(payload) {
    User.create(payload).then((user)=>{
        return user;
    });
}

function findAll(params) : void {
    User.findAll(params).then((users) : any => {
        return users;
    });
}

function findById(id) : void {
    User.findByPk(id).then((user) :  any => {
        return users;
    });
}

function updateUser(payload, where) : void {
    User.update(payload, where).then((updatedUser) : any => {
        return updatedUser;
    });
}

exports.createUsers = createUsers;
exports.findAll = findAll;
exports.findById = findById;
exports.updatedUser = updateUser;