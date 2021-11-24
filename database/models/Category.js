module.exports = (sequelize,dataTypes) => {

    let alias = "Category";

   let cols = {
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
    
        nombre: {
            type: dataTypes.STRING,
            allowNull : false,
        },
    
       };
      let config = {
            timestamps: true,
        }

    const Category = sequelize.define(alias,cols,config)
        
        
        return Category
};