import React from "react";
import styled from "styled-components";
import ray from "../assets/home/homecube/small-ray.svg";
import AnimatedText from "../components/AnimatedText";
import pinklogo from "../assets/logon1u/logo pink.svg";
import whitelogo from "../assets/logon1u/logo white.svg";
import Cubo from "./Cubo";

const Cube = () => {
  return (
    <>
      <CubeSection>
        <CubeContainer>
          <Top>
            <div className="title-text">
              <div className="first">
                <h2>
                  tu{" "}
                  <span>
                    <img className="pink" src={pinklogo} alt="pink-logo" />
                  </span>
                  <span>
                    <img className="yellow" src={whitelogo} alt="yellow-logo" />
                  </span>{" "}
                  card
                </h2>
              </div>
              <div className="second">
                <h2> única cómo vos.</h2>
              </div>
            </div>
            <div className="rectangle">
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
            <AnimatedText>
              <Column className="one">
                <h3 className="text1">
                  pedí tu n1u card - recibila en tu
                  <br /> casa - activala - y listo.
                </h3>
                <p className="text2">
                  El pasaporte para vivir <b>n1u experiences.</b>
                  <br />
                  Formá parte de una comunidad que sabe lo que necesitás y{" "}
                  <b>disfrutá todo lo que te gusta en un solo lugar.</b>
                </p>
                <h2 className="text3">
                  ¡Todas tus compras
                  <br /> suman n1u coins!
                </h2>
              </Column>
            </AnimatedText>

            <Column className="cube">
              <Cubo />
            </Column>

            <AnimatedText>
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
              </Column>
            </AnimatedText>
          </Bottom>
        </CubeContainer>
      </CubeSection>
    </>
  );
};

const CubeSection = styled.div`
  height: auto;
  width: 100%;
  background: #070707;
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

  @media only screen and (max-width: 900px) {
    padding-bottom: 0px;
  }

  .cube {
    margin-top: 60px;
  }
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
    justify-content: center;
    height: 230px;
  }

  .first {
    width: 373px;
    background-color: black;

    .pink {
      height: 50px;
    }
    .yellow {
      display: none;
    }

    @media only screen and (max-width: 970px) {
      width: 310px;
      .pink {
        height: 42px;
      }
      .yellow {
        display: none;
      }
    }

    @media only screen and (max-width: 900px) {
      background-color: transparent;
      width: auto;
      .pink {
        display: none;
      }
      .yellow {
        display: inline;
        height: 38px;
      }
    }
  }

  .second {
    max-width: 535px;
    background-color: black;
    margin-top: -10px;

    @media only screen and (max-width: 970px) {
      width: 430px;
      margin-top: -20px;
    }

    @media only screen and (max-width: 900px) {
      background-color: transparent;
      margin-top: -30px;
      width: auto;
    }
  }

  .title-text {
    display: flex;
    flex-direction: column;

    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 70px;
      letter-spacing: 0.02em;
      color: #ff009c;
      margin-top: 5px;
      line-height: 65px;
      font-style: normal;
      font-weight: 700;
      z-index: 2;
      margin-bottom: 10px;

      @media only screen and (max-width: 970px) {
        font-size: 60px;
        width: 460px;
      }
      @media only screen and (max-width: 900px) {
        color: yellow;
        font-size: 50px;
        width: auto;
      }

      @media only screen and (max-width: 430px) {
        font-size: 40px;
      }
    }
  }

  .rectangle {
    position: absolute;
    right: 0%;
    top: 24%;
    height: 80px;
    width: 920px;
    z-index: -1;
    border: 1px solid grey;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;

    @media only screen and (max-width: 1100px) {
      width: 620px;
    }
    @media only screen and (max-width: 970px) {
      height: 65px;
    }
    @media only screen and (max-width: 900px) {
      left: -5%;
      top: 0%;
      max-width: 300px;
      justify-content: center;
      position: relative;
      border-radius: 20px;
      padding-right: 0px;
    }
    @media only screen and (max-width: 430px) {
      width: 300px;
      left: 0%;
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

      @media only screen and (max-width: 970px) {
        font-size: 11px;
      }

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
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 0px;

    .text1 {
      display: none;
    }
    .text3 {
      display: none;
    }
  }

  .third {
    justify-content: space-between;
    height: 400px;

    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  .one {
    justify-content: space-between;
    height: 400px;
    @media only screen and (max-width: 900px) {
      height: auto;
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

  @media only screen and (max-width: 470px) {
    width: 100%;
  }

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

    @media only screen and (max-width: 900px) {
      font-size: 16px;
      width: 90%;
      line-height: 120%;
      justify-self: center;
      margin: 0 auto;
    }
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
