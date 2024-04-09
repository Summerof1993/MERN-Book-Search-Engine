const {User} = require("../models/User");

const resolvers = {
    Query: {
        me: async () => {
            return User.find();
        }
    },
    Mutation: {
        login: async (parent, {email, password}) => {

        },
        addUser: async() => {

        },
        saveBook: async() => {

        },
        removeBook: async() => {

        }
    }
}
