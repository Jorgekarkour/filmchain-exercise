import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  background-color: #23394d;
`;

export const Listdiv = styled.div`
  display: inherit;
  flex-direction: inherit;
  gap: 10px;
  overflow-y: auto;
  height: 630px;
`;

export const Card = styled(Link)`
  display: flex;
  padding: 10px;
  font-family: sans-serif;
  font-size: 18px;
  color: #e07924;
  border: solid 2px;
  height: 35px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #fff;
    border: solid 2px #e07924;
    background-color: #e07924;
    transition: 0.5s all ease;
  }
`;
