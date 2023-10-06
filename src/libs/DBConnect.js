const Sequelize = require("sequelize")

async function connectToDB(){
    const sequelize = new Sequelize ("db_sad2","root","",{
        host:"localhost",
        dialect:"mysql"
    })
    
    await sequelize.authenticate().then(()=>{
        //this is the resolve promise

    }).catch ((err)=>{
        // reject the promise
        console.error("Encounter error",err)
    })

}

exports.connectToDB=connectToDB