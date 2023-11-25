import { Sequelize } from 'sequelize'
import { dbName, dbPassword, dbUserName, dbHost } from './config.js'

export const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
  host: dbHost,
  dialect: 'postgres'
})
