const { DataTypes } = require("sequelize/types");

module.exports = (sequelize,dataTypes) => {

const Product = sequelize.define('Product',cols,config)

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
        type: DataTypes.TEXT,
        allowNull : false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    measure: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
    },
    image: {
        // type: DataTypes.VARCHAR, PREGUNTAR - 

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }

    }},
    config = {
        timestamps: true,
    }
return Product;
