import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'
import { Products } from './product.model.js'

export const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  surname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.INTEGER
  },
  address: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  rol: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  }
})

Users.hasMany(Products,{
  foreignKey:'user_id',
  sourceKey:'id'
})
Products.belongsTo(Users,{
  foreignKey:'user_id',
  targetKey:'id'
})