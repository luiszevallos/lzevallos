import React, { useMemo } from "react";
import styled from "styled-components";
import TitlePrimary from "./TitlePrimary";
import LogoFuerza from "../assets/project/fuerza-motriz.jpeg";
import LogoMinas from "../assets/project/minas-rose.png";
import LogoFull from "../assets/project/full-motos-chile.jpeg";
import LogoTecnicom from "../assets/project/tecnicom.png";

export default function Projects() {
  const rows = useMemo(() => {
    return [
      {
        project: "Dashboard Tecnicom",
        url: "https://dashboardbot.tecnicom.pe/",
        image: LogoTecnicom,
      },
      {
        project: "Fuerza motriz",
        url: "https://fuerza-motriz.web.app/",
        image: LogoFuerza,
      },
      {
        project: "Minas rose",
        url: "https://minas-rose.vercel.app/",
        image: LogoMinas,
      },
      {
        project: "Full motos chiles",
        url: "https://fullmotoschile.vercel.app/",
        image: LogoFull,
      },
    ];
  }, []);

  return (
    <DivContain id="projects">
      <TitlePrimary text="Proyectos" />
      <DivDetails>
        {rows.map((project, i) => (
          <DivItem key={i} onClick={() => window.open(project.url, "_target")}>
            <Img src={project.image} alt={project.project} />
            <Span>{project.project}</Span>
          </DivItem>
        ))}
      </DivDetails>
    </DivContain>
  );
}

const DivContain = styled.div`
  display: grid;
  max-width: 1024px;
  margin: 20px auto;
  width: 100%;
`;
const DivDetails = styled.div`
  width: 100%;
  margin: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const DivItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #f1f2f3;
  border-radius: 7px;
  box-shadow: 10px 8px 20px #f1f2f3;
  padding: 20px;
  margin: 20px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Span = styled.span`
  color: #6b6b6b;
  font-size: 1em;
  padding: 5px 0;
  font-weight: bold;
`;
