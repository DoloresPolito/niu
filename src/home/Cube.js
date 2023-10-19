import React from "react";
import styled from "styled-components";
import cube from "../assets/home/homecube/cube.svg";
import ray from "../assets/home/homecube/small-ray.svg";

// import MovingComponent from "../components/MovingComponent";

const Cube = () => {
  return (
    <>
      <CubeSection>
        <CubeContainer>
          <Top>
            <h2>
              tu n1u card.
              <br /> única cómo vos.
            </h2>
            <div>
              <img src={ray} alt="ray" />
              <p>
                Comprá lo que quieras en cualquier <br />
                parte del mundo con tu n1u card
                <br />
                <b> VISA INTERNACIONAL PREPAGA.</b>
              </p>
            </div>
          </Top>
          <Bottom>
            <Column className="first">
              <h3>
                pedí tu n1u card - recibila en tu
                <br /> casa - activala - y listo.
              </h3>
              <p>
                El pasaporte para vivir <b>n1u experiences.</b>
                <br />
                Formá parte de una comunidad que sabe lo que necesitás y{" "}
                <b>disfrutá todo lo que te gusta en un solo lugar.</b>
              </p>
              <h2>
                ¡Todas tus compras
                <br /> suman n1u coins!
              </h2>
            </Column>

            <Column>
              <img src={cube} alt="cube" />
            </Column>

            <Column className="third">
              <h6>
                Pedila a través de la app.
                <br /> Recibila en tu casa.
                <br /> Usala en tiendas online & físicas.
                <br /> Solo necesitás ser mayor de 13 años y tener DNI
                argentino.
              </h6>
              <h5>
                . Tarjeta Prepaga Visa Internacionarl <br />
                . Contactless <br />
                . Física & Virtual <br />
                . Personalizada con tu n1uID <br />
                . Sin costo de mantenimiento <br />. ¡Podés pedir adicionales
                gratis!
              </h5>

              <h4>
                El pasaporte para vivir n1u experiences. <br /> Formá parte de
                una comunidad que sabe lo <br /> que necesitás y disfrutá todo
                lo que te gusta <br /> en un solo lugar.
              </h4>
            </Column>
          </Bottom>
        </CubeContainer>
      </CubeSection>
    </>
  );
};

const CubeSection = styled.div`
  height: auto;
  width: 100%;
  background: black;
`;

const CubeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Top = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 150px;
  width: 100%;
  position: relative;
  z-index: 0;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 70px;
    letter-spacing: 0.02em;
    color: #ff009c;
    margin-top: 5px;
    line-height: 65px;
    font-style: normal;
    font-weight: 700;
    width: 580px;
    z-index: 2;
    height: 120px;
    background-color: black;
    @media only screen and (max-width: 970px) {
      font-size: 60px;
      width: 460px;
    }
    @media only screen and (max-width: 900px) {
      color:yellow;
      font-size: 50px;
      width: auto;
    }

  }

  div {
    position: absolute;
    right: 0%;
    top: 24%;
    height: 80px;
    width: 1000px;
    z-index: -1;
    border: 1px solid grey;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;

    @media only screen and (max-width: 900px) {
      left: 0%;
      top: 0%;
      max-width: 300px;
      justify-content: center;
      position: relative;
    }
    p {
      color: #fff;
      text-align: right;
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 120%;
      max-width: 300px;
      text-align: end;
      

      b {
        font-weight: 700;
      }
    }

    img {
      height: 50px;
      padding-right: 30px;
    }
  }
`;
const Bottom = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .third {
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  .first {
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: space-between;
  color: white;
  padding-bottom: 50px;

  img {
  }

  h3 {
    color: #e8e9ee;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  p {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
  }

  h2 {
    color: #e8e9ee;
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
  }

  h6 {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.5px;
  }

  h5 {
    color: #e8e9ee;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }

  h4 {
    /* display:none; */
    @media only screen and (max-width: 900px) {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      letter-spacing: 0.5px;
      display: flex;
    }
  }
`;

export default Cube;
