import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const RotatingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 5s linear infinite;

  img{
    /* width: 50%; */
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

const RotatingComponent = ({children}) => {
  return (
    <Container>
      <RotatingDiv>
        {children}
      </RotatingDiv>
    </Container>
  );
};

export default RotatingComponent;