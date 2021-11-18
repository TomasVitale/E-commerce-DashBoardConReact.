const { DataTypes } = require("sequelize/types");

module.exports = (sequelize,dataTypes) => {

const Product = sequelize.define('Product',cols,config)

cols = {
    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true,
        allowNull: false,
    },
    name: {
        type: dataTypes.TEXT,
        allowNull : false,
    },
    price: {
        type: dataTypes.INTEGER,
        allowNull: false,
    },
    color: {
        type: dataTypes.TEXT,
        allowNull: false,
    },
    measure: {
        type: dataTypes.STRING,
        allowNull: true,
    },
    category_id: {
        type: dataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
    },
    image: {
        type: dataTypes.VARCHAR

    },
    description: {
        type: dataTypes.TEXT,
        allowNull: false,
    }

    }},
    config = {
        timestamps: true,
    }
return Product;
