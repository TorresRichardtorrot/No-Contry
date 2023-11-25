import dotenv from 'dotenv'
dotenv.config()

export const port = process.env.PORT

export const urlFrontEnd = process.env.URL_FRONT_END

//* Variables de entorno de la base de datos
export const dbName = process.env.DB_NAME
export const dbUserName = process.env.DB_USERNAME
export const dbPassword = process.env.DB_PASSWORD
export const dbHost = process.env.DB_HOST
