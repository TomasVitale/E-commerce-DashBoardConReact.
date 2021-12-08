
module.exports = (sequelize,dataTypes) => {

    let alias = "Usuario";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true,
            allowNull: false,
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
       };
       let config = {
            timestamps: false,
            underscored: true,
        }

const Usuario = sequelize.define(alias,cols,config)
    

    
    return Usuario
};