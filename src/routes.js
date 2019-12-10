import express from 'express'

import * as UserController from './controllers/UserControllter'
import * as AddressedController from './controllers/AddressedController'

const routes = express.Router()

routes.get(('/'), (req, res) => {
  return res.json({ msg: 'Hello World' })
})

routes.get(('/users'), UserController.getUsers)
routes.post(('/users'), UserController.createUser)

routes.get(('/users/:userId/addresses'), AddressedController.getAddress)
routes.post(('/users/:userId/addresses'), AddressedController.createAddress)

export default routes
