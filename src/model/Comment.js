const {Datatypes} = require("sequelize")

module.exports=(sequelize)=>{
    const Comment = sequelize.define("tbl_comment",{
  
    content:{
        type:Datatypes.TEXT,
        allowful:false
    },

  
    });

    return Comment;

   
}