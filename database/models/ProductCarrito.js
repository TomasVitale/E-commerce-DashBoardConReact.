module.exports = (sequelize,dataTypes) => {

const ProductCarrito = sequelize.define('roductCarrito',cols,config)

cols = {
    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true,
        allowNull: false,
    },
    id_products: {
        type: dataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
    },
    id_carrito: {
        type: dataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
    },
    createdAt:{ 
       type: dataTypes.DATE
    },

    updatedAt: {
        type: dataTypes.DATE
    },

    name: {
        type: dataTypes.TEXT,
        allowNull : false,
    },
    price: {
        type: dataTypes.INTEGER,
        allowNull: false,
    
    },
    cantidadProductos: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    precioSentado: {
        type: dataTypes.DECIMAL
    }},
config = {
        timestamps: true,
        underscored: true,
        paranoid: true,
    }}
return ProductCarrito;