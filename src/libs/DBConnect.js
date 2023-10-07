const Sequelize = requireI("sequelize");

function connectToDB(){
    const sequelize=new Sequelize("db_sad2","root","",{

        host:"localhost",
        dialect:"mysql"
    })
    await sequelize.authententicate().then(()=>{

        //this is the resolve promise
        console.log("DB connection is successful")
    }).catch((err)=>{
            console.error("Encountered error", err)
    })
}

exports.connectToDB=connectToDB