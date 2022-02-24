import styled from "styled-components";
import Select from "react-select";

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 2px 5px;
  font-family: sans-serif;
  font-size: 16px;
`;

export const StyledLabel = styled.label`
  font-family: sans-serif;
  color: #e07924;
  font-family: sans-serif;
  font-size: 18px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  font-family: sans-serif;
  font-size: 16px;
`;

export const StyledErrorSpan = styled.span`
  font-family: sans-serif;
  font-size: 14px;
  color: red;
`;

export const HalfBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
  padding: 10px;
  gap: 5px;

  @media screen and (max-width: 510px) {
    width: 100%;
  }
`;

export const FullBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 5px;
`;

export const FormButton = styled.button`
  border: none;
  display: block;
  position: relative;
  padding: 0.7em 2.4em;
  font-size: 16px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: #e07924;
  z-index: 0;
  font-family: sans-serif;
  font-weight: 500;
  border: 4px solid #e07924;

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
  }

  span::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: var(--lightgray);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
  }

  :hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: #e07924;
  }

  :hover {
    color: white;
  }

  :active span::before {
    background: #2751cd;
  }
`;
