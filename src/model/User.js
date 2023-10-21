const {Datatypes} = require("sequelize")

module.exports=(sequelize)=>{
    const User = sequelize.define("tbl_User",{
    username:{
        type:Datatypes.STRING,
        allowful:false
    },
    email:{
        type:Datatypes.STRING,
        allowful:false
    },
    password:{
        type:Datatypes.STRING,
        allowful:false
    },
    })

    return Post;

   
}