const {ApolloServer, gql} = require('apollo-server');

const books = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton' 
    }
]

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        test: [Book]
    }
`;

const resolvers = {
    Query: {
        test: () => books,
    }
};

const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});