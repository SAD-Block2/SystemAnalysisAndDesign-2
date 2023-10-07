const Sequelize = require("sequelize")

async function connectToDB(){
    const sequelize=new Sequelize("db_sad","root","",{
        host:"localhost",
        dialect:"mysql"
    })
    sequelize.authenticate().then(()=>{
        //resolve promise
        console.log("DB connection is successful!")
    }).catch((err)=>{
        //reject the promise
        console.error("Encountered error",err)
    })
}

exports.connectToDB=connectToDB