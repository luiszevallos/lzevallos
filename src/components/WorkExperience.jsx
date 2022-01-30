import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { StateContext } from '../contexts/useStateContext';
import TitlePrimary from './TitlePrimary';

export default function WorkExperience() {
  const { state } = useContext(StateContext)
  const { workExperience } = state

  return (
    <DivContain id="work-experience">
      <TitlePrimary text="Experiencia laboral" />
      <DivDetails>
        {workExperience.map((item, key) => (
          <DivItem key={key}>
            <BusinessCenterIcon
              style={{position: "absolute", top: '40%', left: '-10px'}}
              sx={{ color: "#b6b6b6", fontSize: 16 }} />
            <Span>{item.time}</Span>
            <Span primary>{item.charge}</Span>
            <Span>{item.business}</Span>
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
`
const DivDetails = styled.div`
  width: 300px;
  margin: 10px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #f1f2f3;
  border-radius: 7px;
  box-shadow: 10px 8px 20px #f1f2f3;
`
const DivItem = styled.div`
  display: flex;
  padding: 10px;
  padding-left: 20px;
  position: relative;
  flex-direction: column;
`
const Span = styled.span`
  color: #6b6b6b;
  font-size: .85em;
  ${props => props.primary && css`
    font-size: 1em;
    padding: 5px 0;
    font-weight: bold;
  `}
`