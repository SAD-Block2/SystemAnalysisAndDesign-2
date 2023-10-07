const Sequelize = require("sequelize")

function connectToDB(){
    const sequelize=new Sequelize("db_sad","root","",{
        host:"localhost",
        dialect:"mysql"
    })
    sequelize.authenticate().then(()=>{
        //this is the resolve promise
        console.log("DB connection is successfull!")
    }).catch((err)=>{
        //reject the promise
        console.error("Encounter error",err)
    })
}

exports.connectToDB=connectToDB