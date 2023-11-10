const {DataTypes} = require("sequelize")

module.exports = (sequelize) : any => {
    const User = sequelize.define("tbl_comment", {
        content: { 
            type:DataTypes.TEXT,
            allowNull:false,
        },
    });

    return Comment;
};