const Sequelize = require( "sequelize")
function connectToDB(){
    const sequelize= new Sequelize("db_sad2", "root", "",{
        host:"localhost",
        dialect:"mysql"
    } )

 sequelize.authenticate().then(()=>{
    //this is the resolve promise 
    console.log("DB connection is successful!")
 }).catch((error)=>{
    console.error("Encounter error", error)
 })
}

exports.connectToDB=connectToDB

