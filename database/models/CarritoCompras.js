module.exports = (sequelize,dataTypes) => {

const CarritoCompra = sequelize.define('CarritoDeCompra',cols,config)
    
    cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true,
            allowNull: false,
        },
        id_user: {
            type: dataTypes.STRING,
            foreignKey: true,
            allowNull: false,

        },
        createdAt:{ 
           type: dataTypes.DATE
        },
    
        updatedAt: {
            type: dataTypes.DATE
        },
        precioTotal: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        cantidadProductos: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
       },
        config = {
            timestamps: true,
            tablename: "Carrito De Compras",
        }}
    return Usuario;