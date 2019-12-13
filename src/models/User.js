import { Model, DataTypes } from 'sequelize'

class User extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER
      // Não precisa informa o id e os timestamps
    }, {
      sequelize
    })
  }

  static associate (models) {
    // Usuário tem vários endereços
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })

    // Usuário tem várias techs
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })
  }
}

export default User
