const { DataTypes} = require("sequelize")

module.exports=(sequelize)=>{
    const Comment = sequelize.define("tbl_User",{
        content:{
            type:DataTypes.TEXT,
            allowNull:false
        }
       
    });

    return Comment
}