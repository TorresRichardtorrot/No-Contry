import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import companyRoutes from './routers/company.routes.js'
import productRouter from './routers/product.routes.js'
import './models/category_product.model.js'
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
app.use('/backend', companyRoutes)
app.use('/backend', productRouter)

export default app
