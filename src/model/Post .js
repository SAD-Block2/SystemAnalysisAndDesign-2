const {DataTypes} =require("sequalize")

module.exports=(sequalize)=>{
    const Post = sequalize.define("tbl_post",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content:{
            type:DataTypes.Text,
            allowNull:false
        }
    });

    return Post
}