import React from "react";
import styled from "styled-components";

import image from "../assets/n1uverse/cover/aliens-min.png";
import title from "../assets/n1uverse/cover/n1uverse-title-min.png";

import AnimatedText from "../components/AnimatedText";

const N1uverseCover = () => {
  return (
    <>
      <N1uverseSection>
        <TitleImage>
          <img src={title} alt="title" className="title" />
        </TitleImage>
        <NiuverseContainer>
          <NiuniverseContent>
            <TextContainer>
              <div className="text1">
                <AnimatedText>
                  <p>
                    Conocé la emocionante historia del n1uverse, donde Rebel,
                    n1uton y Alien se juntaron para revolucionar el sistema
                    financiero. Sumate a esta increíble aventura y descubrí todo
                    lo que podés lograr en n1u, la super app que se renueva
                    constantemente para ofrecerte beneficios exclusivos.
                  </p>
                </AnimatedText>
              </div>
              <div className="text2">
                <AnimatedText>
                  <p>
                    Explorá el n1uverse lleno de posibilidades, desbloqueá
                    funciones y conectate con personas como vos, mientras juntos
                    descubren nuevos planetas. <br />
                    <b>
                      Abrite a una nueva forma de <br />
                      manejar tus finanzas!
                    </b>
                  </p>
                </AnimatedText>
              </div>
            </TextContainer>
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
  background-image: url("/backgrounds/n1uverse-background-min.png");
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
  margin-top: -50px;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

const NiuniverseContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 260px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    height: auto;
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
    height: auto;
  }

  .image {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    img {
      width: 90%;
      margin-left: 0px;
      @media only screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }
`;

const TextContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 1200px) {
  width: 100%;
  justify-content: space-around;
  }

  @media only screen and (max-width: 785px) {
flex-direction: column;

  }
  .text1 {
    color: white;
    border-bottom: 0.5px solid grey;
    width: 300px;

    @media only screen and (max-width: 1200px) {
      border-bottom: none;
    }
    @media only screen and (max-width: 785px) {
      width: 100%;
    }



    p {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 135.5%;
      letter-spacing: -1.085px;

      b {
        color: #ff009c;
      }
      @media only screen and (max-width: 700px) {
        font-size: 18px;
        line-height: 120%;
      }
      @media only screen and (max-width: 500px) {
        font-size: 16px;
        line-height: 120%;
      }
    }
    @media only screen and (max-width: 1200px) {
      max-width: 100%;
    }
  }

  .text2 {
    color: white;
    border-bottom: 0.5px solid grey;
    padding-left: 30px;
    width: 300px;
    @media only screen and (max-width: 1200px) {
      border-bottom: none;
    }
    @media only screen and (max-width: 785px) {
      width: 100%;
      padding-left: 0px;
    }

    p {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 135.5%;
      letter-spacing: -1.085px;
      margin-left: 10px;
      @media only screen and (max-width: 785px) {
        margin-left: 0px;
      }
 

      b {
        color: #ff009c;
      }
      @media only screen and (max-width: 700px) {
        font-size: 18px;
        line-height: 120%;
      }
      @media only screen and (max-width: 500px) {
        font-size: 16px;
        line-height: 120%;
      }
    }
    @media only screen and (max-width: 1200px) {
      max-width: 100%;
    }
  }
`;

const TitleImage = styled.div`
  height: auto;
  display: flex;
  img {
    width: 100%;
  }
`;

export default N1uverseCover;
