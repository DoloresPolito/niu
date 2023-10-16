import React from "react";
import styled from "styled-components";

function Store() {
  return (
    <>
      <StoreSection>
        <StoreContainer>
          <StoreColumn width="50%">
            <h1>n1u store</h1>
            <h3>
              Poné a prueba tus habilidades en n1u Up, nuestro programa de
              beneficios.
            </h3>
            <p>
              Cumplí misiones, sumá n1u coins y canjealos en tus plataformas
              favoritas.
            </p>
          </StoreColumn>
          <StoreColumn width="25%">
            <h2>MISIONES</h2>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </StoreColumn>
          <StoreColumn width="25%">
            <h2>PREMIOS</h2>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </StoreColumn>
        </StoreContainer>
      </StoreSection>
    </>
  );
}

const StoreSection = styled.div`
  width: 100%;
  height: auto;
`;

const StoreContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  height: 400px;

  margin: 0 auto;
`;

const StoreColumn = styled.div`
  width: ${(props) => props.width};
  height: 400px;
  color: white;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 100px;
    max-width: 200px;
    line-height: 80px;
  }

  h3 {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 20px;
    color: yellow;
  }

  h2 {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 20px;
    color: yellow;
  }

  p {
    color: yellow;
    line-height: 0px;
  }
`;

export default Store;
