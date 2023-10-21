const {DataTypes} =require("sequalize")

module.exports=(sequalize)=>{
    const User = sequalize.define("tbl_user",{
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
    })

    return User
}
