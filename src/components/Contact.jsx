import React, { useContext } from 'react';
import styled, { css } from 'styled-components'
import { StateContext } from '../contexts/useStateContext';

export default function Contact() {
  const { state } = useContext(StateContext)
  const { userPhoneNumber, userEmail } = state

  return (
    <DivContain>
      <DivDetails>
        <DivItem>
          <Span>Telefono</Span>
          <Span primary>{userPhoneNumber}</Span>
        </DivItem>
        <DivItem>
          <Span>Correo electronico</Span>
          <Span primary>{userEmail}</Span>
        </DivItem>
      </DivDetails>
    </DivContain>
  );
}

const DivContain = styled.div`
  height: 150px;
  background-color: #25344a;
`

const DivDetails = styled.div`
  max-width: 1024px;
  margin: 20px auto 0;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const DivItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`
const Span = styled.span`
  color: #ffffff;
  font-size: .9em;
  font-weight: bold;
  ${props => props.primary && css`
    padding-left: 10px
  `}
`
