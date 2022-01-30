import React from "react"
import styled from "styled-components"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialNetwork() {
  return (
    <DivContain>
      <DivIcon>
        <a href="https://www.linkedin.com/in/lzevallos20/" target="_blank" rel="noreferrer">
          <LinkedInIcon sx={{ color: "#ffffff", fontSize: 50 }}/>
        </a>
      </DivIcon>
      <DivIcon>
        <a href="https://www.instagram.com/lzevallos20/" target="_blank" rel="noreferrer">
          <InstagramIcon sx={{ color: "#ffffff", fontSize: 50 }}/>
        </a>
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