const Sequelize = require("sequalize");

async function connectToDB(){
    const sequalize=new Sequelize("db_sad2","root","",{
        host:"localhost",
        dialect:"mysql"
    })

    await sequalize.authenticate().then(()=>{
        //this is the resolve promise
        console.log("DB connection is successful!")
    }).catch((err)=>{
        //reject the promise
        console.error("Encountered error" ,err)

    })
}

exports.connectToDB=connectToDB