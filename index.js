import ExpressService from 'manablox-service-express'
import GraphQLService from 'manablox-service-graphql'

import Router from 'manablox-service-express/router'

import serverConfig from '~~/config/server'
import graphqlConfig from '~~/config/graphql'

// initialize express server
const server = new ExpressService(serverConfig)

// create router
const routes = []
const routeFiles = require.context('./routes', true, /\.js$/)
routeFiles.keys().map((key) => { routes.push({ name: key, route: routeFiles(key).default }) })
const router = new Router(server)
router.AddRoutes(routes)


let graphs = []
const graphFiles = require.context('./graphs', true, /index\.js$/)
graphFiles.keys().map((key) => { graphs.push({ name: key.split('/').reverse()[1], module: graphFiles(key).default }) })

graphs = graphs.filter((graph) => { return graph.module.autoload == true })


// async server start
const StartServer = async () => {
    const graphql = new GraphQLService({ ...graphqlConfig, server, graphs })
    
    graphql.Start()
    server.Start()
}

StartServer()