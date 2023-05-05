const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('Favorite', {
      id:{
         type:DataTypes.INTEGER,
         autoIncrement:true,
         primaryKey:true
      },
      name:{
         type:DataTypes.STRING,
         allowNull:false
      },
      status:{
         type:DataTypes.ENUM("Alive", "Dead", "unknown"),
         defaultValue:"Alive"
      },
      species:{
         type:DataTypes.STRING,
         allowNull:false
      },
      gender:{
         type:DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
         allowNull:false
      },
      origin:{
         type:DataTypes.STRING,
         defaultValue:"Unknown"
      },
      image:{
         type:DataTypes.STRING,
         allowNull:false
      }
   }, { timestamps: false });
};
