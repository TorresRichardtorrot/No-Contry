import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'
import { Products } from './product.model.js'


export const Categories = sequelize.define('Categories', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type:DataTypes.STRING
    }
  })

  Categories.hasMany(Products,{
    foreignKey:'categories_id',
    sourceKey:'id'
  });

  Products.belongsTo(Categories, {
    foreignKey: 'categories_id',
    targetKey: 'id'
  });