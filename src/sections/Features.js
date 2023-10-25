import React from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { Heading1, Heading2, Button } from "../styles/texts";
import cards from "../jsons/esentialcards.json";

function Features() {
  return (
    <EsentialsSection>
      <Navbar />

      <Cover>
        <Heading1>Features</Heading1>
        <Heading2>
          niu es tu billetera, <b>pero a otro level</b>
        </Heading2>
        <Button>
          <p>descargá ahora</p>
        </Button>
      </Cover>
      <EsentialsContainer>
        <Box>
          <Item className="first">
            <div>
              <CardTitle>niu card</CardTitle>
              <CardText>
                Es una tarjeta Visa Prepaga Internacional Física & virtual sin
                costo.
              </CardText>
            </div>
          </Item>
          {cards.map((card, index) => (
            <Item key={index}>
              <div>
                <CardTitle>{card.title} </CardTitle>
                <CardText>{card.content} </CardText>
              </div>
            </Item>
          ))}
        </Box>
      </EsentialsContainer>

      <Footer />
    </EsentialsSection>
  );
}

const EsentialsSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;

  background: linear-gradient(
    217deg,
    #8256bf,
    #3b3659 40.71%,
    #0d0d0d,
    #7763bf
  );

  margin: 0 auto;
`;

const Cover = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EsentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  flex-wrap: wrap;

  @media only screen and (max-width: 1200px) {
    justify-content: space-around;
  }
`;

const Item = styled.div`
  height: auto;
  min-height: 230px;
  width: 280px !important;
  color: white;
  letter-spacing: 0.02em;
  margin-bottom: 40px;
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;

  &.first {
    background-color: #c7a3ff;
    p {
      color: black;
    }
    h2 {
      color: black;
    }
  }
`;

export const CardTitle = styled.h2`
  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  color: white;
  position: absolute;
  top: 3%;
  left: 10%;
  max-width: 270px;

  @media only screen and (max-width: 400px) {
    font-size: 24px;
  }
`;

export const CardText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 1px;
  line-height: normal;
  /* position:absolute;
  top:40%;
  left: 10%;
  max-width: 250px; */

  margin-top: 120px;

  @media only screen and (max-width: 400px) {
    font-size: 14px;
    max-width: 230px;
  }
`;

export default Features;
