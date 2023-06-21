import React, { useMemo, useState } from "react";
import styled from "styled-components";
import TitlePrimary from "./TitlePrimary";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import FullMotoView from "../assets/project/view-fullmoto.png";
import TecnicomView from "../assets/project/view-tecnicom.png";
import FuerzaView from "../assets/project/view-fuerza.png";
import MinasView from "../assets/project/view-minas.png";
import ProfitMobile from "../assets/project/mobile-profit.png";
import TecnicomMobile from "../assets/project/mobile-tecnicom.png";
import { Chip } from "@mui/material";

export default function Projects() {
  const [image, setImage] = useState("");

  const rows = useMemo(() => {
    return [
      {
        type: "web",
        dev: true,
        project: "Full motos chiles",
        url: "https://fullmotoschile.vercel.app/",
        image: FullMotoView,
      },
      {
        type: "mobile",
        project: "Pedido profit+",
        url: "",
        image: ProfitMobile,
      },
      {
        type: "mobile",
        project: "MultiAgente movil",
        url: "",
        image: TecnicomMobile,
      },
      {
        type: "web",
        project: "Minas rose",
        url: "https://minas-rose.vercel.app/",
        image: MinasView,
      },
      {
        type: "web",
        project: "Fuerza motriz",
        url: "https://fuerza-motriz.web.app/",
        image: FuerzaView,
      },
      {
        type: "web",
        project: "Dashboard Tecnicom",
        url: "",
        image: TecnicomView,
      },
    ];
  }, []);

  return (
    <>
      {image ? (
        <DivModal>
          <DivClose onClick={() => setImage("")}>
            <HighlightOffIcon sx={{ color: "#ffffff" }} />
          </DivClose>
          <ImgModal src={image} alt="project" />
        </DivModal>
      ) : null}
      <DivContain id="projects">
        <TitlePrimary text="Proyectos" />
        <DivDetails>
          {rows.map((project, i) => (
            <DivItem key={i}>
              <DivImg>
                <Img
                  src={project.image}
                  onClick={() => setImage(project.image)}
                  alt={project.project}
                />
              </DivImg>
              <Span
                onClick={() => (project.url ? window.open(project.url) : null)}
              >
                {project.project}
              </Span>
              <Span2>
                {project.type === "mobile"
                  ? "App Movil (Android y IOS) "
                  : "Página web "}
              </Span2>
              <Span2>
                {project.dev ? (
                  <Chip
                    label="En Desarrollo"
                    color="info"
                    variant="outlined"
                    size="small"
                  />
                ) : (
                  <Chip
                    label="En Producción"
                    color="success"
                    variant="outlined"
                    size="small"
                  />
                )}
              </Span2>
            </DivItem>
          ))}
        </DivDetails>
      </DivContain>
    </>
  );
}

const DivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgModal = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const DivContain = styled.div`
  display: grid;
  max-width: 1024px;
  margin: 20px auto;
  width: 100%;
  position: relative;
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
  padding: 10px;
  margin: 20px;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;

const DivImg = styled.div`
  overflow: hidden;
  width: 200px;
  height: 200px;
  border-radius: 10px 10px 0 0;
  /* background-color: #25344a; */
`;

const Img = styled.img`
  width: 99%;
  height: 99%;
  border-radius: 10px 10px 0 0;
  object-fit: contain;
  border: 1px solid #f1f2f3;
`;

const Span = styled.span`
  color: #6b6b6b;
  font-size: 1em;
  font-weight: 600;
  padding: 10px 0 5px;
`;

const Span2 = styled.span`
  color: #6b6b6b;
  font-size: 0.8em;
  padding-bottom: 5px;
  font-weight: 400;
`;
