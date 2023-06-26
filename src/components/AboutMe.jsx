import React, { useContext } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import styled from "styled-components";
import Photo from "../assets/profile.jpg";
import TitlePrimary from "./TitlePrimary";
import { StateContext } from "../contexts/useStateContext";

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
            <A
              href="download/CV_Luis_Zevallos_(Development_Frontend).pdf"
              download="CV Luis Zevallos (Development Frontend)"
            >
              <ListAltIcon
                style={{ marginRight: "5px" }}
                sx={{ color: "#fff", fontSize: 17 }}
              />
              Descargar CV
            </A>
          </Button>
        </DivDetails>
      </Div>
    </DivContain>
  );
}

const DivContain = styled.div`
  max-width: 1024px;
  margin: 20px auto 0;
  width: 100%;
`;
const Div = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 0 20px;
  grid-template-columns: 200px 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const DivImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 10px 10px 20px #f1f2f3;
`;
const DivDetails = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 8px 20px #f1f2f3;
`;
const P = styled.p`
  color: #6b6b6b;
  font-size: 0.9em;
`;
const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #25344a;
  :active {
    transform: scale(0.9);
  }
`;

const A = styled.a`
  color: #ffffff;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-decoration: none;
`;
