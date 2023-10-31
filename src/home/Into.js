import React from "react";
import styled from "styled-components";
import Customers from "../components/Customers";
import lines from "../assets/home/homecover/lines-button.svg";

const Into = () => {
  return (
    <>
      <IntoSection>
        <Top>
     
            <Title>
              welcome to <br />
              the n1uverse
            </Title>

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
  height: auto;
  width: 100%;
  margin: auto;
  background: black;
`;

const Top = styled.div`
  background-image: url("/backgrounds/background-introhome.svg");
  background-position: center;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
`;

const ButtonContainer = styled.div`
  height: 100px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Lines = styled.img`
  position: absolute;
  z-index: 1;
`;

export default Into;
