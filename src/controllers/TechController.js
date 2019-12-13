import Tech from '../models/Tech'
import User from '../models/User'

export const getTechs = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await User.findByPk(userId, {
      include: { association: 'techs', through: { attributes: [] } }
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    // const address = await Address.findAll({ where: { user_id: userId } })

    return res.json(user.techs)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createTech = async (req, res) => {
  try {
    const { userId } = req.params
    const { name } = req.body
    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    // Retorna um array. Na primeira posição retorna o model e na segunda um boolean informando se foi criado
    // agora ou antes.
    const [tech] = await Tech.findOrCreate({
      where: { name }
    })

    await user.addTech(tech)

    return res.json(tech)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export const deleteTech = async (req, res) => {
  try {
    const { userId, techId } = req.params
    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    // Retorna um array. Na primeira posição retorna o model e na segunda um boolean informando se foi criado
    // agora ou antes.
    const tech = await Tech.findByPk(techId)

    await user.removeTech(tech)

    /*  await Tech.destroy({
      tech_id: techId
    }) */

    return res.json()
  } catch (error) {
    return res.status(500).json({ error })
  }
}
