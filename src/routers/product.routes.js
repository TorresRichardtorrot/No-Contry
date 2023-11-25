import { Router } from 'express'

const router = Router()

// ? Octener productos
router.get('/product')

// ? Octener un producto mediante el id
router.get('/product/:id')

// ? Crear producto
router.post('/product')

//! Elimina un producto mediante id
router.delete('/product/:id')

// ? Actualiza un producto mediante el id
router.put('/product/:id')

export default router
