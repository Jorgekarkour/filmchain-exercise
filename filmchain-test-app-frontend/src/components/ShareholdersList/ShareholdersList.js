import React from "react";
import { Container, Title } from "../GeneralElements/GeneralElements.elements";
import { ListWrapper, Card, Listdiv } from "./ShareholderList.elements";

export default function ShareholdersList(props) {
  const shareholders = props?.shareholders || [];
  return (
    <Container>
      <ListWrapper>
        <Title>Shareholders</Title>
        <Listdiv>
          {shareholders.map((shareholder, key) => {
            return (
              <Card key={key} to={`/wallet/${shareholder.id}`}>
                {shareholder.firstname} {shareholder.lastname}
              </Card>
            );
          })}
        </Listdiv>
      </ListWrapper>
    </Container>
  );
}
