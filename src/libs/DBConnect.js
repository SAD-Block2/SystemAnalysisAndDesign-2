const Sequelize = require("sequelize");

async function connectToDB(){
    const sequelize=new Sequelize("db_sad2", "root", "123456",{
        host: "locahost",
        dialect: "mysql",        
    })
    
    await sequelize.authenticate().then(()=>{
        // this is the resolve promise
    
    }).catch((err)=>{
        // reject the promise
        console.error("Encountered error",err)
    })    
}

exports.coonectToDB=connectToDB