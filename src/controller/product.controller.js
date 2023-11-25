// ? Octener productos
export const getProducts = async (req, res) => {
  try {
    console.log(req.body)
    res.resStatus(200)
  } catch (error) {
    console.log(error)
    res.resStatus(500)
  }
}
// ? Octener un producto mediante el id
export const getProduct = async (req, res) => {
  try {
    console.log(req.body)
    res.resStatus(200)
  } catch (error) {
    console.log(error)
    res.resStatus(500)
  }
}

// ? Crear producto
export const createProduct = async (req, res) => {
  try {
    console.log(req.body)
    res.resStatus(200)
  } catch (error) {
    console.log(error)
    res.resStatus(500)
  }
}

// ? Actualiza un producto mediante el id
export const updateProduct = async (req, res) => {
  try {
    console.log(req.body)
    res.resStatus(200)
  } catch (error) {
    console.log(error)
    res.resStatus(500)
  }
}

//! Elimina un producto mediante id
export const deleteProduct = async (req, res) => {
  try {
    console.log(req.body)
    res.resStatus(200)
  } catch (error) {
    console.log(error)
    res.resStatus(500)
  }
}
