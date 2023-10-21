const {DataTypes} =require("sequalize")

module.exports=(sequalize)=>{
    const Comment = sequalize.define("tbl_comment",{
    
       content:{
            type:DataTypes.Text,
            allowNull:false
        }
    });

    return Post
}