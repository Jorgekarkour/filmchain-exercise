const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
  }

  type MovieTransfer {
    id: ID!
    movieId: Int!
    amount: Int!
    description: String
  }

  type ShareholderTransfer {
    id: ID!
    shareholderId: Int!
    amount: Int!
  }

  type Shareholder {
    id: ID!
    firstname: String!
    lastname: String!
    address: String!
    iban: String!
    balance: Int
    movieId: Int!
  }

  type Query {
    allMovies: [Movie]!
    movie(id: ID!): Movie
    allShareholders: [Shareholder]!
    shareholder(id: ID!): Shareholder
    allShareholderTransfer(shareholderId: Int!): [ShareholderTransfer]!
  }

  type Mutation {
    registerShareholder(
      firstname: String!
      lastname: String!
      address: String!
      iban: String!
      movieId: Int!
    ): Shareholder!

    registerMovie(title: String!): Movie!

    registerMovieTransfer(
      amount: Int!
      movieId: Int!
      description: String
    ): MovieTransfer!
  }
`;

module.exports = { typeDefs };
