import React from "react";
import styled from "styled-components";
import Js from "../assets/javascript.png";
import nodejs from "../assets/nodejs.jpg";
import python from "../assets/python.png";
import reactjs from "../assets/reactjs.png";
import nextjs from "../assets/nextjs.jpeg";
import typescript from "../assets/typescript.svg";
import TitlePrimary from "./TitlePrimary";

export default function Tecnhology() {
  return (
    <DivContain id="technologies">
      <TitlePrimary text="Tecnologías" />
      <DivDetails>
        <Img src={Js} alt="javscript" />
        <Img src={typescript} alt="typescript" />
        <Img src={reactjs} alt="reactjs" />
        <Img src={nextjs} alt="nextjs" />
        {/* <Img src={python} alt="python" /> */}
        {/* <Img src={nodejs} alt="nodejs" /> */}
      </DivDetails>
    </DivContain>
  );
}

const DivContain = styled.div`
  display: grid;
  max-width: 1024px;
  margin: 20px auto 0;
  width: 100%;
`;

const DivDetails = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 80px;
  margin: 20px 30px;
  @media (max-width: 750px) {
    width: 55px;
    margin: 20px 20px;
  }
  @media (max-width: 600px) {
    width: 45px;
    margin: 20px 10px;
  }
`;
