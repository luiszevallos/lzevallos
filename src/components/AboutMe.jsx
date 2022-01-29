import React, { useContext } from 'react';
import styled from 'styled-components';
import Photo from '../assets/profile.jpg';
import TitlePrimary from './TitlePrimary';
import { StateContext } from '../contexts/useStateContext';

export default function AboutMe() {
  const { state } = useContext(StateContext);
  const { aboutMe } = state;

  return (
    <DivContain id="about-me">
      <TitlePrimary text="Quien soy" />
      <Div>
        <DivImage>
          <Img src={Photo} alt="Luis zevallos" />
        </DivImage>
        <DivDetails>
          <div>
            <P>{aboutMe}</P>
          </div>
          <Button>
            Descargar CV
          </Button>
        </DivDetails>
      </Div>
    </DivContain>
  );
}

const DivContain = styled.div`
  max-width: 1024px;
  margin: 50px auto;
  width: 90%;
`
const Div = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 0 20px;
  grid-template-columns: 200px 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 10px 10px 20px #f1f2f3;
`
const DivDetails = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 8px 20px #f1f2f3;
`
const P = styled.p`
  color: #6b6b6b;
  font-size: .9em;
`
const Button = styled.button`
  border: 0;
  color: #ffffff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #25344a;
  :active {
    transform: scale(0.9);
  }
`