module.exports = (sequelize,dataTypes) => {

    let alias = "Product"

    let cols = {
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
            type: dataTypes.TEXT,
    
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true,
        }
    
        },
        config = {
            timestamps: true,
        }

const Product = sequelize.define(alias,cols,config)


return Product
};
