import React from "react"
import styled from "styled-components"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialNetwork() {
  return (
    <DivContain>
      <DivIcon>
        <LinkedInIcon sx={{ color: "#ffffff", fontSize: 60 }}/>
      </DivIcon>
      <DivIcon>
        <InstagramIcon sx={{ color: "#ffffff", fontSize: 60 }}/>
      </DivIcon>
    </DivContain>
  )
}

const DivContain = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: center;
`

const DivIcon = styled.div`
  cursor: pointer;
  margin: 0 20px;
  padding: 7px 10px;
  background: #25344a;
  border-radius: 10px;
  :active {
    transform: scale(0.9);
  }
`