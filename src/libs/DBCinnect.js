const Sequelize = require("sequelize")

async function connectToDB(){
    const sequelize = new Sequelize("db_sad2", "root", "",{
        host: "localhost",
        dialect: "mysql"
    })
await sequelize.authenticate().then(()=>{
        //this is the resolve promise
        console.log("DB connection is successful")
    }).catch((error)=> {
        //this rejects the promise
        console.error("Encountered Error", err)
    })
}

exports.connectToDB = connectToDB