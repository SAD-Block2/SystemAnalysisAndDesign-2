const{datatypes} = require("sequelize");

module.exports =  (sequelize) =>{
    const User = sequelize.define("tbl_User",{
        username:{
            type:datatypes.string,
            allowNull:false 
        },
       email:{
            type:datatypes.string,
            allowNull:false 
        },
        password:{
            type:datatypes.string,
            allowNull:false 
        }
    });

    return User
}