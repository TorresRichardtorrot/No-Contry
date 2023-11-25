import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routers/users.routes.js'
import { urlFrontEnd } from './config.js'

const app = express()

app.use(
  cors({
    origin: urlFrontEnd,
    credentials: true
  })
)
app.use(express.json())
app.use(morgan('dev'))
app.use('/backend', userRoutes)

export default app
