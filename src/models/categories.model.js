import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'


export const Categories = sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  })
  