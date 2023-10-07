const Sequelize = require("sequelize")
async function connectToDB(){
    const sequelize = new Sequelize("db_sad2","root","",{
        host:"localhost",
        dialect:"mysql"
    })

    await Sequelize.authenticate().then(()=>{
        //This is the resolve promise
        console.log("DB connection is successful!")
    }).catch((error)=>{
        //Reject the promise
        console.error("Encountered error", error)
    })
}

exports.connectToDB = connectToDB
