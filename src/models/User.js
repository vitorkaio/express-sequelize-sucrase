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
}

export default User
