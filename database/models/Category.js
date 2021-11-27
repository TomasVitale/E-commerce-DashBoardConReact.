module.exports = (sequelize,dataTypes) => {

    let alias = "Category";

   let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull : false,
        },
    
       };
      let config = {
            timestamps: false,
            tableName: "category",
            underscored: true,
        }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = function ( models){

    Category.hasMany(models.Product,{
        foreingKey:"category_id"

    })};
    
        
        
        return Category
};