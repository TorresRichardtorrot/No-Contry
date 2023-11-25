import app from './app.js'
import { port } from './config.js'
import { sequelize } from './DB.js'
import './models/user.model.js'
import './models/product.model.js'

async function main () {
  try {
    await sequelize.sync()
    console.log('Coneccion con DB')
    app.listen(port || 3000)
    console.log('*** Server ***', port)
  } catch (error) {
    console.error(error)
  }
}

main()
