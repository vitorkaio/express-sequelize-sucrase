import Address from '../models/Address'
import User from '../models/User'

export const getAddress = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findByPk(userId, {
      include: { association: 'addresses' }
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    // const address = await Address.findAll({ where: { user_id: userId } })

    return res.json(user.addresses)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createAddress = async (req, res) => {
  try {
    const { userId } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id: userId
    })

    return res.json(address)
  } catch (error) {
    return res.status(500).json(error)
  }
}
