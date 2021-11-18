module.exports = (sequelize,dataTypes) => {

    const Category = sequelize.define('Category',cols,config)
        
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
        
           },
            config = {
                timestamps: true,
            }}
        return Category;