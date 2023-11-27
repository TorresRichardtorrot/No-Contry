import {sequelize} from '../DB.js'
import { DataTypes} from 'sequelize'

export const Seller = sequelize.define('Sellers',{
    id:{
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
})
