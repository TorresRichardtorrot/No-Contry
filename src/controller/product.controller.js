//* 🟩=Listo,🟧=En proseso, 🟥=falta
import { Products } from "../models/product.model.js"



// ? 🟩Octener productos
export const getProducts = async (req, res) => {
  const {id} = req.body
  try {
    const products = await Products.findAll({
      where:{
        id
      }
    })
    res.json(products)
  } catch (error) {
    console.log(error)
     res.status(500).send('Error interno del servidor');
  }
}

// ? 🟩Octener un producto mediante el id
export const getProduct = async (req, res) => {
  const {id} = req.params
  try {
    const products = await Products.findByPk(id)
    if(!products) return res.status(404).send('No se a encontrado el producto');
    res.json(products)
  } catch (error) {
    console.log(error)
     res.status(500).send('Error interno del servidor');
  }
}

// ? 🟧Crear producto
export const createProduct = async (req, res) => {
  try {
    const {name,price,description,quantity,user_id,categories_id} = req.body
    const newProduct = await Products.create({
      name,
      description,
      price,
      quantity,
      user_id,
      categories_id
    })
    res.status(200).json(newProduct)
  } catch (error) {
    console.log(error)
     res.status(500).send('Error interno del servidor');
  }
}

// ?🟩 Actualiza un producto mediante el id
export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params
    const {name,price,description,quantity} = req.body

    const product = await Products.findByPk(id)
    product.name=name
    product.price=price
    product.description=description
    product.quantity=quantity
    await product.save()

    res.json(product)
  } catch (error) {
    console.log(error)
     res.status(500).send('Error interno del servidor');
  }
}

//? 🟩Elimina un producto mediante id
export const deleteProduct = async (req, res) => {
  try {
   const {id} = req.params
   await Products.destroy({
    where:{
      id
    }
   })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
     res.status(500).send('Error interno del servidor');
  }
}
