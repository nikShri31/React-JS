import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Offers() {
  
    return <Container>Super Deal! Free Shipping on Orders Above Rs.999</Container>;
  
}

export default Offers