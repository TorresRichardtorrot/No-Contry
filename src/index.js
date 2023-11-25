import app from './app.js'
import { port } from './config.js'
import { sequelize } from './DB.js'


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
