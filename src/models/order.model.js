import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'

export const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_sellpoint: {
    type: DataTypes.INTEGER
  },
  total:{
    type:DataTypes.INTEGER
  },
  total_quantity:{
    type:DataTypes.INTEGER
  },
  detail:{
    type:DataTypes.ARRAY(DataTypes.STRING)
  }
})
