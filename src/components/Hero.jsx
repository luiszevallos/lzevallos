import React, { useContext } from "react";
import styled, { css } from "styled-components"
import { StateContext } from "../contexts/useStateContext"
import FondoHero from "../assets/fondo-hero.jpeg"
import Header from "./Header"

export default function Hero(props) {
  const { state } = useContext(StateContext);
  const { userLastname, userName } = state;

  return (
    <Div fondo={FondoHero}>
      <DivTransparent />
      <Header />
      <DivHero>
        <Span>Hola,</Span>
        <Span primary>{`Soy ${userName} ${userLastname},`}</Span>
        <Span>Desarrollador Web</Span>
        <Span message>Desarrollador Front End / Desarrollador Python</Span>
      </DivHero>
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  display: grid;
  height: 650px;
  background-size: 100% 100%;
  grid-template-rows: 62px 1fr;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(${props => props.fondo});
`

const DivTransparent = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
`

const DivHero = styled.div`
  z-index: 3;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1024px;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

const Span = styled.span`
  color: #ffffff;
  font-size: 2.7em;
  max-width: 400px;
  font-weight: 700;
  ${props => props.primary && css`
    margin: 10px 0;
  `}
  ${props => props.message && css`
    margin: 10px 0;
    font-size: 1em;
    font-weight: 600;
  `}
`