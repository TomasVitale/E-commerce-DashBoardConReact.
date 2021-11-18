const { DataTypes } = require("sequelize/types");

module.exports = (sequelize,dataTypes) => {

const ProductCarrito = sequelize.define('roductCarrito',cols,config)

cols = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true,
        allowNull: false,
    },
    id_products: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
    },
    id_carrito: {
        type: dataTypes.INTEGER,
        foreignKey: true,
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
    cantidadProductos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioSentado: {
        type: DataTypes.DECIMAL
    }},
config = {
        timestamps: true,
    }}
return ProductCarrito;