import React from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { Heading1, Heading2, Button, Container } from "../styles/texts";
import cards from "../esentialcards.json";

function Esentials() {
  return (
    <EsentialsSection>
      <Navbar />
      <Container>
        <Cover>
          <Heading1>Features</Heading1>
          <Heading2>
            niu es tu billetera, <b>pero a otro level</b>
          </Heading2>
          <Button>
            <p>descargá ahora</p>
          </Button>
        </Cover>

        <Box>
          <Item className="first">
            <div>
              <CardTitle>niu card</CardTitle>
              <CardText>
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
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
      </Container>
      <Footer />
    </EsentialsSection>
  );
}

const EsentialsSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  /* background: linear-gradient(to bottom, black, violet, black); */
  background-image: url("images/features/fondo- 1.png");
  background-size: cover;
  background-position: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    background-image: url("images/features/fondo 1.png");
  }
`;

const Cover = styled.div`
  height: 600px;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-auto-rows: 1fr;
  column-gap: 100px;
  row-gap: 40px;
  padding: 0px 0px 150px 0px;

  @media only screen and (min-width: 751px) and (max-width: 1170px) {
    grid-template-columns: 1fr 1fr !important;
    grid-template-rows: auto auto auto !important;
    row-gap: 20px;
    column-gap: 30px;
  }
  @media only screen and (max-width: 750px) {
    /* grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    max-width: 90%; */

    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    row-gap: 20px;
    column-gap: 0px;
    padding: 0px 0px 50px 0px;
    margin-top: -50px;
  }
`;

const Item = styled.div`
  color: white;
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  height: auto;

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
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  color: white;

  @media only screen and (max-width: 850px) {
    font-size: 19px;
  }
`;

export const CardText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 1px;

  @media only screen and (max-width: 850px) {
    font-size: 12px;
  }
`;

export default Esentials;
