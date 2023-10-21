const {DataTypes} = require("sequelize")

module.exports=(Sequelize)=>{
    const Comment = Sequelize.define("tbl_comment",{
        content:{
            type:DataTypes.STRING,
            allowNull:true
        }

    });

    return Comment
}