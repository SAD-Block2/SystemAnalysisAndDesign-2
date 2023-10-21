const {Datatypes} = require("sequelize")

module.exports=(sequelize)=>{
    const Post = sequelize.define("tbl_post",{
    title:{
        type:Datatypes.STRING,
        allowful:false
    },
    content:{
        type:Datatypes.STRING,
        allowful:false
    },

  
    })

    return Post;

   
}