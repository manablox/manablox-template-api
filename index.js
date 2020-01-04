import ExpressService from 'manablox-service-express'
import serverConfig from '~~/config/server'

const server = new ExpressService(serverConfig)

server.Use('/', async (req, res, next) => {
    res.json('hello')
})

server.Start()
