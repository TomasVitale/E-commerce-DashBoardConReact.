
module.exports = (sequelize,dataTypes) => {

const Usuario = sequelize.define('Usuario',cols,config)
    
    cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true,
            allowNull: false,
        },
        createdAt:{ 
           type: dataTypes.DATE
        },
    
        updatedAt: {
            type: dataTypes.DATE
        },
    
        name: {
            type: dataTypes.STRING,
            allowNull : false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: false,
        }
       },
        config = {
            timestamps: true,
        }}
    return Usuario;