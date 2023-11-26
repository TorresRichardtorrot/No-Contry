//* 🟩=Listo,🟧=En proseso, 🟥=falta
import bcrypt from "bcryptjs";
import { Users } from "../models/user.model.js";

//? Registrar usuario
export const register = async (req, res) => {
  const {
    name,
    surname,
    email,
    phone,
    address,
    password,
    rol,
    country
  }=req.body
  try {
    console.log(email)
    const userFound = await Users.findOne({
      where: {
      email
    }
  })
    if (userFound) return res.status(400).send("El correo ya esta en uso")

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      name,
    surname,
    email,
    phone,
    address,
    password:passwordHash,
    rol,
    country
    })
    console.log(newUser)
    res.status(200).json(newUser)
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
