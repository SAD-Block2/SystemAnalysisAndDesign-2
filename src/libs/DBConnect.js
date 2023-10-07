const Sequelize = require("sequelize");

async function connectToDB(){
     const sequelize = new Sequelize("db_sad2","root","",{
        host: "localhost",
        dialect: "mysql",
    });

    await sequelize.authenticate().then(()=>{
        //this is the resolve promise (successful)
        console.log("DB Connection is successful")

    }).catch((err)=>{
        //this is a rejected promise (unsuccessful)
        console.error("Encountered an error",err)
    })
}

exports.connectToDB=connectToDB
   