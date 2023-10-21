const { DataTypes} = require("sequelize")

module.exports=(sequelize)=>{
    const Post = sequelize.define("tbl_User",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });

    return Post
}