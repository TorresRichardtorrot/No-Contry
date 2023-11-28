import {sequelize} from '../DB.js'
import { DataTypes} from 'sequelize'
import { Products } from './product.model.js'

export const CategoryProduct = sequelize.define('Category_Product',{
    id:{
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    }
})

CategoryProduct.hasMany(Products,{
    foreignKey:'category_productID',
    sourceKey:'id'
})
Products.belongsTo(CategoryProduct,{
    foreignKey:'category_productID',
    targetId:'id'
})

