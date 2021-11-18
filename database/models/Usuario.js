const { DataTypes } = require("sequelize/types");
module.exports = (sequelize,dataTypes) => {

const Usuario = sequelize.define('Usuario',cols,config)
    
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        avatar: {
            // type: DataTypes.INTEGER, - Preguntar tipo de Dato -
            allowNull: false,
        }
       },
        config = {
            timestamps: true,
        }}
    return Usuario;