import React from "react";
import styled from "styled-components";

import AnimatedText from "../components/AnimatedText";

function Store() {
  return (
    <>
      <StoreSection>
        <StoreContainer>
          <StoreColumn width="50%" className="store">
            <h1>n1u store</h1>
            <AnimatedText>
            <h3>
              Poné a prueba tus
              <br /> habilidades en n1u Up,
              <br /> nuestro programa de
              <br />
              beneficios.
            </h3>
            </AnimatedText>
            <AnimatedText>

       
            <h6>
              Cumplí misiones, sumá n1u coins y <br />
              canjealo en tus plataformas favoritas.
            </h6>
            </AnimatedText>
          </StoreColumn>

          <StoreColumn className="row" width="50%">
            <AnimatedText>

    
            <StoreColumn width="50%" className="misiones">
              <h2>Misiones</h2>
              <p>Pagá tus servicios</p>
              <p>Pagá con tu n1u card</p>
              <p>Recargá tu celular</p>
              <p>Recargá tu tarjeta de transporte</p>
              <p>Canjeá tus n1u coins</p>
              <p>Vendé o comprá crypto</p>
              <p>Hacé pagos con QR</p>
            </StoreColumn>
            </AnimatedText>
            <AnimatedText>
            <StoreColumn width="50%" className="premios">
              <h2>Premios</h2>
              <p>Recargas</p>
              <p>Gifts Cards</p>
              <p>Vouchers</p>
              <p>Descuentos</p>
              <p>Pesos</p>
              <p>Cryptos</p>
            </StoreColumn>
            </AnimatedText>
          </StoreColumn>
        </StoreContainer>
      </StoreSection>
    </>
  );
}

const StoreSection = styled.div`
  width: 100%;
  height: 650px;
  background: linear-gradient(#634f7f, #0a0a0e);
  @media only screen and (max-width: 640px) {
    height: 600px;
  }
`;

const StoreContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  padding: 50px 0px;
  @media only screen and (max-width: 1300px) {
    justify-content: center;
    align-self: center;
  }
  .misiones {
    align-items: flex-start;
    width: auto;
    margin-right: 30px;

    h2 {
      margin-right: 83px;
    }
  }

  .premios {
    align-items: flex-start;
    margin-left: 30px;
    width: auto;
    h2 {
      margin-right: 90px;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 130px;
    justify-content: flex-end;
    width: 700px;
    height: 300px;

    @media only screen and (max-width: 1300px) {
      display: none;
    }
  }
`;

const StoreColumn = styled.div`
  width: ${(props) => props.width};
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 1300px) {
    width: 100%;
    justify-self: center;
  }

  h1 {
    font-family: 'LoRes';
    font-size: 170px;
    max-width: 200px;
    line-height: 130px;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    letter-spacing: 8px;


    @media only screen and (max-width: 640px) {
      font-size: 150px;
      line-height: 120px;
    }

    @media only screen and (max-width: 550px) {
      font-size: 110px;
      line-height: 70px;
      padding-bottom: 30px;
      margin-bottom: 0px;
    }

    @media only screen and (max-width: 415px) {
      font-size: 90px;
    }
  }

  h3 {
    font-family: 'LoRes';
    font-size: 30px;
    color: #fff1a8;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    letter-spacing: 1px;
    padding-top: 10px;
    width: 450px;
    line-height: 35px;
    padding-bottom: 10px;
    @media only screen and (max-width: 640px) {
      font-size: 28px;
      width: 420px;
      
    }
    @media only screen and (max-width: 550px) {
      font-size: 22px;
      line-height: 28px;
      padding-bottom: 30px;
      width: 330px;
      margin-bottom: 0px;
    }

    @media only screen and (max-width: 415px) {
      font-size: 20px;
    }
  }

  h2 {
    font-family: 'LoRes';
    font-size: 25px;
    color: #fff1a8;
    letter-spacing: 1px;


  }

  h6 {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 35px;
    @media only screen and (max-width: 550px) {
      font-size: 22px;
      line-height: 25px;
    }

    @media only screen and (max-width: 415px) {
      font-size: 20px;

    }
  }

  p {
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    padding-top: 10px;
    font-family: 'LoRes';
    font-size:14px;

    @media only screen and (max-width: 510px) {
      font-size: 13px;
    }
  }
`;

export default Store;
