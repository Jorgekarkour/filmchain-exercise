import { gql } from "@apollo/client";

export const ALL_MOVIES = gql`
  query {
    allMovies {
      id
      title
    }
  }
`;

export const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id
      title
    }
  }
`;

export const ALL_SHAREHOLDERS = gql`
  query {
    allShareholders {
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

export const GET_SHAREHOLDER = gql`
  query getShareholder($id: ID!) {
    shareholder(id: $id) {
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

export const ALL_TRANSFERS = gql`
  query {
    allTransfers {
      id
      movieId
      amount
      description
    }
  }
`;

export const GET_TRANSFER = gql`
  query getTransfer($id: ID!) {
    transfer(id: $id) {
      id
      movieId
      amount
      description
    }
  }
`;

export const ALL_SHAREHOLDER_TRANSFERS = gql`
  query getShareholderTrasnfers($shareholderId: Int!) {
    allShareholderTransfer(shareholderId: $shareholderId) {
      id
      amount
    }
  }
`;
