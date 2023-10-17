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
              Poné a prueba tus
              <br /> habilidades en n1u Up,
              <br /> nuestro programa de
              <br />
              beneficios.
            </h3>
            <p>
              Cumplí misiones, sumá n1u coins <br /> y canjealos en tus
              plataformas favoritas.
            </p>
          </StoreColumn>
          <StoreColumn width="25%" className="misiones">
            <h2>MISIONES</h2>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </StoreColumn>
          <StoreColumn width="25%" className="premios">
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
  background: linear-gradient( #9198e5, black);
`;

const StoreContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  height: 400px;
  margin: 0 auto;
  padding-top: 40px;

  .misiones {
    align-items: flex-end;

    h2 {
      margin-right: 83px;
    }

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  .premios {
    align-items: flex-end;
    h2 {
      margin-right: 90px;
    }

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  @media only screen and (max-width: 1130px) {
    width: 90%;
  }
`;

const StoreColumn = styled.div`
  width: ${(props) => props.width};
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 130px;
    max-width: 200px;
    line-height: 90px;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    letter-spacing: 8px;
  }

  h3 {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 20px;
    color: #fff1a8;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    letter-spacing: 3px;
    padding-top: 10px;
  }

  h2 {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 20px;
    color: #fff1a8;
  }

  p {
    color: #fff1a8;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    letter-spacing: 1px;
    padding-top: 10px;
  }

  @media only screen and (max-width: 900px) {

    margin: 0 auto;
  }
`;

export default Store;
