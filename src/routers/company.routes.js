import { Router } from 'express'
import { register, login, logout } from '../controller/company.controller.js'

const router = Router()

// ? Registra a un usuario
router.post('/register', register)

// ? Iniciar seccion
router.post('/login', login)

// ? Salir de la seccion
router.post('/logout', logout)

export default router
