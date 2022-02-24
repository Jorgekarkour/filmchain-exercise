import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_SHAREHOLDERS } from "../gql/querys/querys";
import ShareholderForm from "../components/CustomForm/ShareholderForm";
import MovieForm from "../components/CustomForm/MovieForm";
import ShareholdersList from "../components/ShareholdersList/ShareholdersList";
import { CustomContainer } from "../components/CustomContainer/CustomContainer.elements";
import TransferForm from "../components/CustomForm/TransferForm";

function Admin() {
  const { data, error, loading } = useQuery(ALL_SHAREHOLDERS);
  return (
    <CustomContainer>
      <div style={{ width: "70%" }}>
        <MovieForm />
        <ShareholderForm />
        <TransferForm />
      </div>
      <div style={{ width: "30%" }}>
        <ShareholdersList shareholders={data?.allShareholders} />
      </div>
    </CustomContainer>
  );
}

export default Admin;
