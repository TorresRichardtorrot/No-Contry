import bcrypt from "bcryptjs";
import { Company } from "../models/company.model.js";

//? Registrar usuario
export const register = async (req, res) => {
  try {
    res.status(200).json()
  } catch (error) {
    console.error(error)
     res.status(500).send('Error interno del servidor');
  }
}

export const login = async (req, res) => {
  try {
    console.log(req.body)
    return res.sendStatus(200)
  } catch (error) {
    console.error(error)
     res.status(500).send('Error interno del servidor');
  }
}

export const logout = async (req, res) => {
  try {
    console.log(req.body)
    return res.sendStatus(200)
  } catch (error) {
    console.error(error)
     res.status(500).send('Error interno del servidor');
  }
}
