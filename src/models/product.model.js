import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'

export const Products = sequelize.define('Products', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
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

