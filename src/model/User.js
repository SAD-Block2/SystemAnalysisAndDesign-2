const { DataTypes} = require("sequelize")

module.exports=(sequelize)=>{
    const User = sequelize.define("tbl_User",{
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

    return User
}