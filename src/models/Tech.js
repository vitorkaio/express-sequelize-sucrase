import { Model, DataTypes } from 'sequelize'

class Tech extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING
      // Não precisa informa o id e os timestamps
    }, {
      sequelize,
      tableName: 'techs'
    })
  }

  // Um endereço pertence a um usuário
  static associate (models) {
    // Tech possui vários usuários
    this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' })
  }
}

export default Tech
