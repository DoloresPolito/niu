import React from "react";
import styled from "styled-components";
import Customers from "../components/Customers";
import lines from "../assets/home/homecover/lines-button.svg";
import AnimatedText from "../components/AnimatedText";

const Into = () => {
  return (
    <>
      <IntoSection>
        <Top>
          <AnimatedText>
            <Title>
              welcome to <br />
              the n1uverse
            </Title>
          </AnimatedText>
          <ButtonContainer>
            <Lines src={lines} alt="lines" />
            <div className="button">
              <p>press start to continue</p>
            </div>
          </ButtonContainer>
        </Top>
        <Customers />
      </IntoSection>
    </>
  );
};

const IntoSection = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  background: black;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  background-image: url("/backgrounds/intro-home-min.png");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* max-width: 1600px; */

  .button {
    background-color: #ff009c;
    color: white;
    border-radius: 30px;
    display: flex;
    height: 50px;
    width: 300px;
    justify-content: center;

    cursor: pointer;
    z-index: 10;
    position: absolute;

    p {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      margin-top: 12px;
      letter-spacing: 0.5px;
    }

    @media only screen and (max-width: 520px) {
      width: 250px;
      height: 45px;

      p {
        margin-top: 10px;
      }
    }
  }
`;

const Title = styled.h1`
  color: #e8e9ee;
  font-family: "LoRes";
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  @media only screen and (max-width: 750px) {
    font-size: 60px;
  }

  @media only screen and (max-width: 520px) {
    font-size: 40px;
  }
`;

const ButtonContainer = styled.div`
  height: 100px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 520px) {
    height: 100px;
    width: 200px;
  }
`;

const Lines = styled.img`
  position: absolute;
  z-index: 1;
`;

export default Into;
