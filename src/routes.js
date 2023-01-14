const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const ProjectsController = require('./controllers/ProjectsController')




routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/projects', ProjectsController.index)
routes.post('/projects', ProjectsController.create)
// routes.get('/projects/:id', ProjectsController.update)
// routes.get('/projects/:id', ProjectsController.delete)


module.exports = routes