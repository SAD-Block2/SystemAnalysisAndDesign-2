const {DataTypes} = require("sequelize")

module.exports=(Sequelize)=>{
    const Post = Sequelize.define("tbl_post",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content:{
            type:DataTypes.STRING,
            allowNull:true
        }
    });

    return Post
}