const{datatypes} = require("sequelize");

module.exports =  (sequelize) =>{
    const comment = sequelize.define("tbl_comment",{
        content:{
            type:datatypes.text,
            allowNull:false 
        }
    });

    return comment
}