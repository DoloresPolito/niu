import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { Container } from "../styles/texts";
import AccordionItem from "../components/AccordionItem";
import questions1 from "../questions1.json";
import questions2 from "../questions2.json";

function Questions() {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };
  return (
    <>
      <QuestionsSection>
        <Navbar />
        <Cover>
          <h1>Preguntas frecuentes</h1>
        </Cover>
        <Container>
          <QuestionsContainer>
            <Box>
              <h2>Sobre niu</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              {questions1.map((question) => (
                <AccordionItem
                  key={question.id}
                  active={active}
                  handleToggle={() => handleToggle(question.id)}
                  id={question.id}
                  header={question.title}
                  content={question.content}
                />
              ))}

              <h2>Usuario y Cuenta</h2>

              {questions2.map((question) => (
                <AccordionItem
                  key={question.id}
                  active={active}
                  handleToggle={() => handleToggle(question.id)}
                  id={question.id}
                  header={question.title}
                  content={question.content}
                />
              ))}
            </Box>
          </QuestionsContainer>
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
  background: linear-gradient(-45deg, #683475, violet, #8d479e, #e30052);

  h1 {
    font-family: "VisbyBold";
    font-size: 154px;
    font-style: normal;
    font-weight: 800;
    line-height: 120px;
    letter-spacing: 1.5px;
    color: white;
    max-width: 700px;
    padding-top: 70px;

    @media only screen and (max-width: 845px) {
      font-size: 120px;
      max-width: 540px;
      padding-top: 100px;
    }

    @media only screen and (max-width: 580px) {
      font-size: 80px;
      max-width: 360px;
      line-height: 90px;
      padding-top: 100px;
    }

    @media only screen and (max-width: 430px) {
      display: none;
    }
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  min-height: 100vh;
`;

const Box = styled.div`
  background-color: white;
  height: auto;
  margin: 80px 0px;

  h2 {
    color: #e30052;
    padding-bottom: 20px;
  }

  p {
    padding-bottom: 30px;
    line-height: 22px;
  }
`;

export default Questions;
