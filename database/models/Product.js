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
        
        image: {
            type: dataTypes.TEXT,
    
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: true,
        }
    
        },
        config = {
            timestamps: false,
            underscored: true,
        }

const Product = sequelize.define(alias,cols,config)

Product.associate = function ( models) {
    Product.belongsTo (models.Category, {

        as: "category",

        foreignKey: "category_id"

    })
};


return Product
};
