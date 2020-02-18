export default {
    Query: {
        async Users(root, { filter, sort, limit, skip }, { UserDataProvider }, info){
            let users = await UserDataProvider.Find({ filter, sort, limit, skip })

            return users
        }
    },

    Mutation: {
        async CreateUser(parent, { data }, { UserDataProvider }){

        },

        async UpdateUser(parent, { id, data }, { UserDataProvider }){

        },

        async DeleteUser(parent, { id, data }, { UserDataProvider }){

        },
    },

    User: {

    }
}