import { Op } from 'sequelize'
import User from '../models/User'

export const getReport = async (req, res) => {
  // Encontrar todos os usuário q possui email que termina com: dev.com.br - filtro
  // Todos que moram na rua: of monsters and men - filtro
  // Desses usuários todos os que começam com a tecnologia: react - wherever
  try {
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@dev.com.br'
        }
      },
      include: [
        {
          association: 'addresses',
          attributes: ['street', 'number'],
          where: { street: 'of monsters and men' }
        }, // addresses
        {
          association: 'techs',
          attributes: ['name'],
          through: { attributes: [] },
          required: false, // retorna se satisfazer o filtro
          where: {
            name: {
              [Op.iLike]: 'react%'
            }
          }
        } // techs
      ]
    })
    return res.json(users)
  } catch (error) {
    return res.status(505).json(error)
  }
}
