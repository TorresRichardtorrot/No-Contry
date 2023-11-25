import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'

export const Products = sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  }
})
