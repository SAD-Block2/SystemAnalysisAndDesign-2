const{datatypes} = require("sequelize");

module.exports =  (sequelize) =>{
    const post = sequelize.define("tbl_post",{
        title:{
            type:datatypes.string,
            allowNull:false 
        },
       content:{
            type:datatypes.text,
            allowNull:false 
        }
    });

    return post
}