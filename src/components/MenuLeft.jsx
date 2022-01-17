import React from "react"
import styled from "styled-components"

export default function MenuLeft(props) {
  return (
    <Nav>
      <Ul>
        <Li>Inicio</Li>
        <Li>Quien soy</Li>
        <Li>Tecnologias</Li>
        <Li>Certificados</Li>
        <Li>Contactame</Li>
      </Ul>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;
`

const Li = styled.li`
  color: #ffffff;
  margin: 0 10px;
  cursor: pointer;
  padding: 7px 10px;
  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.07);
  }
  :active {
    transform: scale(0.9);
  }
`