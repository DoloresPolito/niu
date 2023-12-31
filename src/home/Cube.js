import React from "react";
import styled from "styled-components";
import Cubo from "./Cubo";
import AnimatedText from "../components/AnimatedText";

const Cube = () => {
  return (
    <>
      <CubeSection>
        <CubeContainer>
          <Title>
            <AnimatedText>
              <h2>
                n1u
                <br /> card
                <br /> Visa
              </h2>
            </AnimatedText>
            <AnimatedText>
              <p>Todas tus compras suman n1u coins!</p>
            </AnimatedText>
          </Title>

          <Column>
            <Cubo />
          </Column>

          <Text>
            <AnimatedText>
              <p>
                Accedé <br />
                <b>SIN COSTO </b> <br />a tu tarjeta VISA <br />
                prepaga <br /> internacional.
                <br />
                <br />
                ¡Usala en todo el <br /> mundo!
                <br />
                <br />
                Podés elegir física o <br />
                virtual y personalizar <br /> tu n1uID.
              </p>
            </AnimatedText>
          </Text>
        </CubeContainer>
      </CubeSection>
    </>
  );
};

const CubeSection = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #1f1f1f;
  /* background: linear-gradient(45deg, #ff009c 1%, #bd3aff 5%, #1f1f1f 20%); */
  display: flex;

  @media only screen and (max-width: 900px) {
    height: 700px;
  }
`;

const CubeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    position: relative;
    width: 500px;
  }

  @media only screen and (max-width: 550px) {
    width: 400px;
  }

  @media only screen and (max-width: 420px) {
    width: 350px;
  }
`;

const Text = styled.div`
  height: auto;
  position: absolute;
  top: 40%;
  right: 5%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;

  p {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
  }

  b {
    color: #ff009c;
  }

  @media only screen and (max-width: 1120px) {
    right: 0%;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    left: 0%;
    bottom: 0%;
    top: 60%;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 550px) {
    p{
      font-size: 15px;
      width: 150px;
    }
  }
`;

const Title = styled.div`
  height: auto;
  position: absolute;
  top: -10%;
  left: 5%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #e8e9ee;
    font-family: "LoRes";
    font-size: 175px;
    font-style: normal;
    font-weight: 400;
    line-height: 85.5%;
  }

  p {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    width: 200px;
    margin-top: -100px;
    margin-left: 20px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    left: 0;
    top: 0%;
    height: 250px;
    width: 100%;

    h2 {
      font-size: 80px;
    }

    p {
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 550px) {
    p{
      font-size: 15px;
      width: 100px;
    }
  }
`;

const Column = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  z-index: 1;
  background-color: blue;

  p {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;

    b {
    }

    @media only screen and (max-width: 900px) {
      font-size: 16px;
      width: 90%;
      line-height: 120%;
      justify-self: center;
      margin: 0 auto;
    }
  }
`;

export default Cube;
