import React from "react";
import styled from "styled-components";

function Store() {
  return (
    <>
      <StoreSection>
        <StoreContainer>
          <StoreColumn width="50%" className="store">
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

          <StoreColumn className="row" width="50%">
            <StoreColumn width="50%" className="misiones">
              <h2>MISIONES</h2>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
            </StoreColumn>
            <StoreColumn width="50%" className="premios">
              <h2>PREMIOS</h2>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit</p>
            </StoreColumn>
          </StoreColumn>
        </StoreContainer>
      </StoreSection>
    </>
  );
}

const StoreSection = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(#9198e5, black);
`;

const StoreContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 0 auto;
  padding-top: 40px;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
  .misiones {
    align-items: flex-end;

    h2 {
      margin-right: 83px;
    }

    @media only screen and (max-width: 1100px) {
      align-items: flex-start;
    }

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }

  .premios {
    align-items: flex-end;
    h2 {
      margin-right: 90px;
    }

    @media only screen and (max-width: 1100px) {
      align-items: flex-start;
    }

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }

  .row {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 300px;
    @media only screen and (max-width: 800px) {
      height: 0px;
    }
  }

  /* @media only screen and (max-width: 1130px) {
    width: 90%;
  } */
`;

const StoreColumn = styled.div`
  width: ${(props) => props.width};
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 510px) {
    width: 100%;
  }

  h1 {
    font-family: "Pixelify Sans", sans-serif;
    font-size: 130px;
    max-width: 200px;
    line-height: 90px;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    letter-spacing: 8px;

    @media only screen and (max-width: 510px) {
      font-size: 100px;
    }

    @media only screen and (max-width: 390px) {
      font-size: 80px;
      line-height: 70px;
    }
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
    @media only screen and (max-width: 510px) {
      font-size: 15px;
    }
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

    @media only screen and (max-width: 510px) {
      font-size: 13px;
    }
  }

  /* @media only screen and (max-width: 800px) {
    margin: 0 auto;
  } */
`;

export default Store;
