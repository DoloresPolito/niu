import React from "react";
import styled from "styled-components";
import { Button } from "../styles/texts";

import mobilephone from "../assets/home/homecover/mobile-phone.svg";
import AnimatedText from "../components/AnimatedText";

const CoverMobile = () => {
  return (
    <>
      <CoverMobileSection>
        <CoverMobileContainer>
          <div className="topcontainer">
            <AnimatedText>

    
            <h1>
              tu billetera a <br /> <b>otro level.</b>
            </h1>
            </AnimatedText>
            <AnimatedText>
            <p>
              Pesos & Crypto <br />
              <b>
                {" "}
                Manejá tus finanzas <br /> con n1u
              </b>
            </p>
            </AnimatedText>

          </div>
          <div className="phonecontainer">
            <img src={mobilephone} alt="mobilephone" />
          </div>
          <div className="bottomcontainer">
      
            <p>
              Hecha por y para gamers <br />
              <b>Cumplí misiones y ganá con n1u</b>
            </p>
 
       
            <h3>
              Unite al <br />
              n1uverse
            </h3>
   
          </div>
          <Button>
            <p>descargá la app</p>
          </Button>
        </CoverMobileContainer>
      </CoverMobileSection>
    </>
  );
};

const CoverMobileSection = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/backgrounds/home-hero.png");
`;

const CoverMobileContainer = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 180px;
  margin-bottom: 80px;

  button {
    margin-top: 30px;
  }

  @media only screen and (max-width: 800px) {
    width: 80%;
  }

  @media only screen and (max-width: 700px) {
    width: 90%;
  }

  .phonecontainer {
    img {
      width: 400px;

      @media only screen and (max-width: 460px) {
        width: 300px;
      }
    }
  }
  .topcontainer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: -30px;

    h1 {
      color: white;
      font-family: "Roboto", sans-serif;
      font-size: 42px;
      font-style: normal;
      font-weight: 800;
      line-height: 34px;
      letter-spacing: 0.5px;
      max-width: 450px;
      align-self: flex-end;

      b {
        font-family: 'LoRes';
      }

      @media only screen and (max-width: 460px) {
        font-size: 32px;
      }
    }

    p {
      color: #e8e9ee;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-align: right;
      margin-bottom: 30px;

      b {
        font-weight: 700;
      }

      @media only screen and (max-width: 460px) {
        font-size: 12px;
      }
    }
  }

  .bottomcontainer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: -20px;

    @media only screen and (max-width: 460px) {
      margin-top: 20px;
    }

    p {
      color: #e8e9ee;
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
      letter-spacing: 0.5px;
      text-align: left;
      max-width: 120px;
      margin-top: -150px;
      margin-bottom: 30px;
      align-self: flex-end;

      @media only screen and (max-width: 800px) {
        margin-left: 50px;
      }

      @media only screen and (max-width: 700px) {
        margin-left: 30px;
      }

      @media only screen and (max-width: 540px) {
        margin-left: 0px;
      }

      @media only screen and (max-width: 460px) {
        font-size: 12px;
      }

      b {
        font-weight: 700;
      }
    }

    h3 {
      color: yellow;
      font-family: "Roboto", sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      text-align: right;
      margin-top: -0px;

      @media only screen and (max-width: 460px) {
        font-size: 18px;
      }
    }
  }
`;

export default CoverMobile;
