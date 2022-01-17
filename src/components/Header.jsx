import React, { useContext } from "react";
import styled from "styled-components";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import MenuLeft from "./MenuLeft";
import { StateContext } from "../contexts/useStateContext"

export default function Header(props) {
  const { state } = useContext(StateContext);
  const { user } = state;

  return (
    <HeaderContain>
      <Div>
        <Span>{user}</Span>
        <Brightness1Icon sx={{ color: "red", fontSize: 14 }} />
      </Div>
      <MenuLeft />
    </HeaderContain>
  )
}

const HeaderContain = styled.header`
  z-index: 2;
  width: 100%;
  display: grid;
  margin: 0 auto;
  position: relative;
  max-width: 1154px;
  grid-template-columns: auto 1fr;
`

const Div = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`

const Span = styled.span`
  color: #ffffff;
  font-size: 1.3em;
  padding: 0 4px 0 10px;
  text-transform: capitalize;
`