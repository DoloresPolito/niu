import React from "react";
import styled from "styled-components";
import Cubo from "./Cubo";
import AnimatedText from "../components/AnimatedText";
// import anillo from "../assets/home/homecube/anillo.png"

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
               {/* <img src={anillo} alt="anillo-cubo"/> */}
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
  background-color: #070707;
  display: flex;
  overflow: hidden;
  background-image: url("/backgrounds/background-cube-min.png");
  background-position: center;
  background-size: cover;

  margin: 0 auto;
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
  max-width: 1600px;
  position: relative;


`;

const Text = styled.div`
  height: auto;
  position: absolute;

  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  top: 50%;
  left: 85%;
  transform: translate(-50%, -50%);

  p {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
  }

  b {
    color: #ff009c;
  }

  @media only screen and (max-width: 1145px) {
    top: 80%;
  }

  @media only screen and (max-width: 850px) {
    top: 80%;
    left: 50%;
    width: 100%;

    p {
      font-size: 15px;
      width: 150px;
    }
  }
  @media only screen and (max-width: 500px) {
    p {
      font-size: 13px;
      width: 150px;
    }
  }

`;

const Title = styled.div`
  height: auto;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  text-align: start;
  top: 40%;
  left: 20%;
  transform: translate(-50%, -50%);

  h2 {
    color: #e8e9ee;
    font-family: "LoRes";
    font-size: 175px;
    font-style: normal;
    font-weight: 400;
    line-height: 85.5%;
    text-align: start !important;
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

  @media only screen and (max-width: 1145px) {
    h2 {
      font-size: 130px;
    }

    p {
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      font-size: 15px;
      width: 150px;
    }

    h2 {
      padding-top: 70px;
      font-size: 110px;
    }
  }

  @media only screen and (max-width: 500px) {
    h2 {
      margin-top: -20px;
      font-size: 70px;
    }

    p {
      font-size: 13px;
      width: 80px;
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
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);

  img{
    position: absolute;
    z-index: 1000;
    width: 550px;
    top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  }


`;

export default Cube;
