const {DataTypes} = require("sequelize")

module.exports=(sequelize)=>{
    const User = sequelize.define("tbl_post",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content:{
            type:DataTypes.TEXT,
            allowNull:false
        },

    });

    return Post
};