import User from '../models/User'

export const getUsers = async (_, res) => {
  const users = await User.findAll()
  return res.json(users)
}

export const createUser = async (req, res) => {
  const { name, email, age } = req.body
  const user = await User.create({ name, email, age })
  return res.json(user)
}
