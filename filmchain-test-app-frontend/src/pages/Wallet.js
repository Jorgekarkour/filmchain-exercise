import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Info,
  Title,
  Wrapper,
} from "../components/GeneralElements/GeneralElements.elements";
import {
  ALL_SHAREHOLDER_TRANSFERS,
  GET_MOVIE,
  GET_SHAREHOLDER,
} from "../gql/querys/querys";

function Wallet() {
  const params = useParams();
  const { data: shareholder } = useQuery(GET_SHAREHOLDER, {
    variables: { id: params.id },
  });
  const { data: movie } = useQuery(GET_MOVIE, {
    skip: !shareholder?.shareholder?.movieId,
    variables: { id: shareholder?.shareholder?.movieId },
  });
  const { data: transfers } = useQuery(ALL_SHAREHOLDER_TRANSFERS, {
    variables: { shareholderId: Number(params.id) },
  });
  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            {shareholder?.shareholder?.firstname}{" "}
            {shareholder?.shareholder?.lastname}
          </Title>
          <Info>Address: {shareholder?.shareholder?.address}</Info>
          <Info>IBAN: {shareholder?.shareholder?.iban}</Info>
          <Info>Movie: {movie?.movie?.title}</Info>
          <Info>Balance: {shareholder?.shareholder?.balance} EUR</Info>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <Title>Activity</Title>
          {transfers?.allShareholderTransfer?.map((transfer, key) => (
            <Info key={key}>
              TxID: {transfer.id} | Amount: {transfer.amount} EUR
            </Info>
          ))}
        </Wrapper>
      </Container>
    </>
  );
}

export default Wallet;
