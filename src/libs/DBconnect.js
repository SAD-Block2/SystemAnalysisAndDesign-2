const Sequelize = require("sequelize")

async function connecToDB(){
    const sequelize=new Sequelize("db_sad2","root","",{
        host:"localhost",
        dialect:"mysql"
    })
    await sequelize.authenticate().then(()=>{
        //this is the resolve promise
        console.loog("DB connection is successful!")
    }).catch((err)=>{
        //reject the promise
        console.err("Encountered error",err)
    })
}

exports.connectToDB=connectToDB
