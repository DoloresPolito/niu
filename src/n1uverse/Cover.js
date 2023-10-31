import React from "react";
import styled from "styled-components";

const N1uverseCover = () => {
  return (
    <>
      <N1uverseSection>
   
        <CoverContainer>
         
        </CoverContainer>
      </N1uverseSection>
    </>
  );
};

const N1uverseSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;

  img {
    height: auto;
    width: auto;
    max-width: 100%;
    transition: transform 0.3s;
    position: absolute;
  }

  /* Aplica la transformación solo si el ancho de la pantalla es menor o igual a 768px (puedes ajustar este valor según tus necesidades) */
  @media (max-width: 768px) {
    img {
      transform: scale(0.8); /* Escala la imagen al 80% de su tamaño original */
    }
  }
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: auto;
  justify-content: space-between;
`;



export default N1uverseCover;
