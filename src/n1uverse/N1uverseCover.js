import React from "react";
import styled from "styled-components";

import image from "../assets/n1uverse/cover/aliens.svg";
import title from "../assets/n1uverse/cover/title-n1uverse.svg";

import AnimatedText from "../components/AnimatedText";


const N1uverseCover = () => {
  return (
    <>
      <N1uverseSection>
        <NiuverseContainer>
          <TitleImage src={title} alt="title" className="title" />
          <NiuniverseContent>
            <div className="text">
              <AnimatedText>

      
              <p>
              Conocé la emocionante historia del n1uverse, donde Rebel, n1uton y Alien se juntaron para revolucionar el sistema financiero. Sumate a esta increíble aventura y descubrí todo lo que podés lograr en n1u, la super app que se renueva constantemente para ofrecerte beneficios exclusivos. Explorá el n1uverse lleno de posibilidades, desbloqueá funciones y conectate con personas como vos, mientras juntos descubren nuevos planetas. 
              <br/>
              <br/>
              Abrite a una nueva forma de manejar las finanzas.
              </p>
              </AnimatedText>
            </div>
            <div className="image">
              <img src={image} alt="n1uverse" />
            </div>
          </NiuniverseContent>
        </NiuverseContainer>
      </N1uverseSection>
    </>
  );
};

const N1uverseSection = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  background-image: url("/backgrounds/n1uverse-background.png");
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1200px) {
    padding-top: 100px;
  }
`;

const NiuverseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: auto;
  margin: 0 auto;



  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

const NiuniverseContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 360px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    height: auto;
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
    height: auto;
  }

  .text {
    color: white;
    max-width: 500px;
    border-bottom: 1px solid grey;

    p {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 135.5%;
      letter-spacing: -1.085px;
    }
    @media only screen and (max-width: 1200px) {
      max-width: 100%;
    }
  }

  .image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    img {
      width: 80%;
      margin-left: 0px;
      @media only screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }
`;

const TitleImage = styled.img`
width:100%;

display: block;
padding: 0;
margin: 0;
`

export default N1uverseCover;
