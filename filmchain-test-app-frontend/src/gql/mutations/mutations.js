import { gql } from "@apollo/client";

export const REGISTER_MOVIE = gql`
  mutation registerMovie($title: String!) {
    registerMovie(title: $title) {
      id
      title
    }
  }
`;

export const REGISTER_SHAREHOLDER = gql`
  mutation registerShareholder(
    $firstname: String!
    $lastname: String!
    $address: String!
    $iban: String!
    $movieId: Int!
  ) {
    registerShareholder(
      firstname: $firstname
      lastname: $lastname
      address: $address
      iban: $iban
      movieId: $movieId
    ) {
      id
      firstname
      lastname
      address
      iban
      balance
      movieId
    }
  }
`;

export const REGISTER_TRANSFER = gql`
  mutation registerMovieTransfer(
    $amount: Int!
    $description: String!
    $movieId: Int!
  ) {
    registerMovieTransfer(
      amount: $amount
      description: $description
      movieId: $movieId
    ) {
      id
      amount
      description
      movieId
    }
  }
`;
