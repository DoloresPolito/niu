import React from "react";
import styled from "styled-components";
import cube from "../assets/home/cube/Video cards.png";

import MovingComponent from "../components/MovingComponent";

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
          </Top>
          <Bottom>
            <Column>
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
            <MovingComponent>
              <Column>
                <img src={cube} alt="cube" />
              </Column>
            </MovingComponent>
            <Column>
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

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 70px;
    letter-spacing: 0.02em;
    color: #ff009c;
    font-weight: 800;
    margin-top: 5px;
    line-height: 60px;
  }
`;
const Bottom = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: space-between;
  color: white;
  padding-bottom:50px;

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.5px;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 100;
    line-height: 28px;
    letter-spacing: 0.5px;
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
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.5px;
  }
`;

export default Cube;
