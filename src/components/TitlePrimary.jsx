import React from 'react';
import styled from 'styled-components';

export default function TitlePrimary(props) {
  const { text } = props

  return (
    <DivContain>
      <Span>{text}</Span>
    </DivContain>
  );
}

const DivContain = styled.div`
  margin: 50px 10px 30px;
  padding: 0 10px;
  display: flex;
`
const Span = styled.span`
  font-size: 1.7em;
  font-weight: bold;
  color: #6b6b6b;
  @media (max-weight: 500px) {
    font-size: 1.3em;
  }
`