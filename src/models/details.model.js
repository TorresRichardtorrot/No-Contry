import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'

export const Details = sequelize.define('Details', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_order: {
    type: DataTypes.INTEGER
  },
  id_product: {
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  total_price: {
    type: DataTypes.INTEGER
  }
})
