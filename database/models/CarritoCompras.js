const { DataTypes } = require("sequelize/types");
module.exports = (sequelize,dataTypes) => {

const CarritoCompra = sequelize.define('CarritoDeCompra',cols,config)
    
    cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true,
            allowNull: false,
        },
        id_user: {
            type: DataTypes.STRING,
            foreignKey: true,
            allowNull: false,

        },
        createdAt:{ 
           type: DataTypes.DATE
        },
    
        updatedAt: {
            type: DataTypes.DATE
        },
        precioTotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidadProductos: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
       },
        config = {
            timestamps: true,
            tablename: "Carrito De Compras",
        }}
    return Usuario;