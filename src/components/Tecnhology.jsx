import React from 'react';
import styled from 'styled-components'
import Js from '../assets/javascript.png'
import nodejs from '../assets/nodejs.jpg'
import python from '../assets/python.png'
import reactjs from '../assets/reactjs.png'
import TitlePrimary from './TitlePrimary';

export default function Tecnhology() {
  return (
    <DivContain id="technologies">
      <TitlePrimary text="Tecnologías" />
      <DivDetails>
        <Img src={Js} alt="javscript" />
        <Img src={reactjs} alt="reactjs" />
        <Img src={python} alt="python" />
        <Img src={nodejs} alt="nodejs" />
      </DivDetails>
    </DivContain>
  );
}

const DivContain = styled.div`
  display: grid;
`

const DivDetails = styled.div`
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 60px;
  margin: 10px 20px;
`