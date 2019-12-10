import Sequelize from 'sequelize'
import dbConfig from '../config/database'

import User from '../models/User'
import Address from '../models/Address'

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)

User.associate(connection.models)
Address.associate(connection.models)

export default connection
