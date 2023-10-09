import React from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { Heading1, Container } from "../styles/texts";

function Questions() {
  return (
    <>
      <QuestionsSection>
        <Navbar />
        <Cover>
          <Heading1>
            Preguntas <br />
            frecuentes
          </Heading1>
        </Cover>
        <Container>
          <QuestionsContainer></QuestionsContainer>
        </Container>
        <Footer />
      </QuestionsSection>
    </>
  );
}

const QuestionsSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background-color: white;
`;

const Cover = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, black, violet, black, violet);
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  min-height: 100vh;
`;

// const Box = styled.div`
//   background-color: white;
//   height: auto;
//   margin: 80px 0px;
// `;

export default Questions;
