const express = require('express')
const projectsRouter = require('./routes/projectsRouter')
const resourcesRouter = require('./routes/resourcesRouter')
const tasksRouter = require('./routes/tasksRouter')

const server = express()

server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

module.exports = server