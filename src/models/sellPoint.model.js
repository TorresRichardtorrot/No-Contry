import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'

export const sellPoint = sequelize.define('SellPoint', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_seller: {
    type: DataTypes.INTEGER
  },
  products:{
    type:DataTypes.ARRAY(DataTypes.STRING)
  }
})
