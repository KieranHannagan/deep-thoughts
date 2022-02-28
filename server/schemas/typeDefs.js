const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    hellWorld: String
}
`;

module.exports = typeDefs;