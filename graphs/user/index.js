import * as typeDefs from './schema.graphql'
import resolvers from './resolvers'

import DataProvider from '~~/core/DataProvider'

const dataProvider = new DataProvider({
    collection: 'users'
})

export default {
    autoload: true,
    typeDefs,
    resolvers,
    context: { 
        UserDataProvider: dataProvider
    }
}