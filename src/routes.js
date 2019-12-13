import express from 'express'

import * as UserController from './controllers/UserControllter'
import * as AddressedController from './controllers/AddressedController'
import * as TechController from './controllers/TechController'
import * as ReportController from './controllers/ReportController'

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ msg: 'Hello World' })
})

routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.createUser)

routes.get('/users/:userId/addresses', AddressedController.getAddress)
routes.post('/users/:userId/addresses', AddressedController.createAddress)

routes.get('/users/:userId/techs', TechController.getTechs)
routes.post('/users/:userId/techs', TechController.createTech)
routes.delete('/users/:userId/techs/:techId', TechController.deleteTech)

routes.get('/report', ReportController.getReport)

export default routes
