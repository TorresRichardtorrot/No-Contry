import { Router } from 'express'
import {
    getProduct,
    getProducts,
    deleteProduct,
    createProduct,
    updateProduct
} from '../controller/product.controller.js'


const router = Router()

// ? Octener productos
router.get('/product',getProducts)

// ? Octener un producto mediante el id
router.get('/product/:id',getProduct)

// ? Crear producto
router.post('/product',createProduct)

//! Elimina un producto mediante id
router.delete('/product/:id',deleteProduct)

// ? Actualiza un producto mediante el id
router.put('/product/:id',updateProduct)

export default router
