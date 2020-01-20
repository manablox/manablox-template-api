import ExpressService from 'manablox-service-express'
import serverConfig from '~~/config/server'
import Router from 'manablox-service-express/router'
import MongoDB from 'manablox-service-mongodb'

// initialize express server
const server = new ExpressService(serverConfig)

// create router
const routes = []
const routeFiles = require.context('./routes', true, /\.js$/)
routeFiles.keys().map((key) => { routes.push({ name: key, route: routeFiles(key).default }) })
const router = new Router(server)
router.AddRoutes(routes)

// async server start
const StartServer = async () => {
    // you can do tasks like database connection here
    const database = new MongoDB()
    // starting the server
    server.Start()
}

StartServer()