import { Products } from "../models/product.model.js"
//* 🟩=Listo,🟧=En proseso, 🟥=falta


// ? 🟩Octener productos
export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll()
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
    const products = await Products.findAll({
      where: {
        id
      }
    })
    res.json(products)
  } catch (error) {
    console.log(error)
     res.status(500).send('Error interno del servidor');
  }
}

// ? 🟧Crear producto
export const createProduct = async (req, res) => {
  try {
    const {name,price,description,quantity} = req.body
    const newProduct = await Products.create({
      name,
      description,
      price,
      quantity
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
