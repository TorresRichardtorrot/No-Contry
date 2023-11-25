import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'

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
