const { DataTypes } = require("sequelize/types");

module.exports = (sequelize,dataTypes) => {

    const Category = sequelize.define('Category',cols,config)
        
        cols = {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey : true,
                allowNull: false,
            },
            createdAt:{ 
               type: DataTypes.DATE
            },
        
            updatedAt: {
                type: DataTypes.DATE
            },
        
            name: {
                type: DataTypes.STRING,
                allowNull : false,
            },
        
           },
            config = {
                timestamps: true,
            }}
        return Category;