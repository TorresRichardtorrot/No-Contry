export const register = async (req, res) => {
  try {
    console.log(req.body)
    return res.sendStatus(200)
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

export const login = async (req, res) => {
  try {
    console.log(req.body)
    return res.sendStatus(200)
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}

export const logout = async (req, res) => {
  try {
    console.log(req.body)
    return res.sendStatus(200)
  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
}
