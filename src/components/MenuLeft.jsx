import React from "react";
import styled from "styled-components";

export default function MenuLeft() {
  return (
    <Nav>
      <Ul>
        <li>
          <A href="#home">Inicio</A>
        </li>
        <li>
          <A href="#about-me">Quien soy</A>
        </li>
        <li>
          <A href="#technologies">Tecnologías</A>
        </li>
        <li>
          <A href="#projects">Mis proyectos</A>
        </li>
        <li>
          <A href="#contact">Contactame</A>
        </li>
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  @media (max-width: 740px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const A = styled.a`
  color: #ffffff;
  margin: 0 10px;
  font-size: 0.9em;
  font-weight: 700;
  padding: 7px 10px;
  border-radius: 5px;
  text-decoration: none;
  :hover {
    background-color: rgba(255, 255, 255, 0.07);
  }
  :active {
    transform: scale(0.9);
  }
`;
