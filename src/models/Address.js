import { Model, DataTypes } from 'sequelize'

class Address extends Model {
  static init (sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER
      // Não precisa informa o id e os timestamps
    }, {
      sequelize
    })
  }

  // Um endereço pertence a um usuário
  static associate (models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Address
