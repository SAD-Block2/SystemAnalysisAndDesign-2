const {DataTypes} = require("sequelize")

module.exports=(Sequelize)=>{
    const User = Sequelize.define("tbl_user",{
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