import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { useParams } from "react-router-dom";
import benefits from "../jsons/benefitscards.json";
import { Button } from "../styles/texts.js";
import image from "../assets/benefits/celu 1.png";

function Benefit() {
  const params = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    const benefitId = parseInt(params.id);

    const filteredData = benefits.filter((item) => item.id === benefitId);
    setData(filteredData[0]);
  }, [params]);

  return (
    <>
      <BenefitSection>
        <Navbar view="benefit" />
        {data ? (
          <>
            <BenefitContainer>
              <ImageContainer>
                <CardImage src={data.image} alt="card logo" />
              </ImageContainer>

              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>

              <h6>{data.title}</h6>
              <h6>{data.content}</h6>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </BenefitContainer>
          </>
        ) : (
          <></>
        )}

        <BottomContainer>
          <div>
            <div className="text">
              <h3>
                tu billetera a <br /> <b>otro level.</b>
              </h3>
              <Button>
                <p>descargá ahora</p>
              </Button>
            </div>
            <div className="image">
              <img src={image} alt="phone" />
            </div>
          </div>
        </BottomContainer>
        <Footer />
      </BenefitSection>
    </>
  );
}

const BenefitSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 845px) {
    padding-top: 50px;
  }
`;

const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 100vh;
  margin: 0 auto;
  justify-content: center;
  height: auto;
  padding-bottom: 150px;
  padding-top: 180px;

  h3 {
    font-family: "VisbyBold";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1px;
    max-width: 800px;
    padding-top: 40px;
  }

  h4 {
    font-family: "Visby";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1px;
    max-width: 600px;
  }

  h5 {
    font-family: "Visby";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1px;
  }

  h6 {
    font-family: "VisbyBold";
    letter-spacing: 1px;
    font-size: 15px;
    background-color: red;
    color: black;
  }

  p {
    font-family: "Visby";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 30px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const BottomContainer = styled.div`
  background: linear-gradient(-45deg, #5c0a33, black, #5c0a33, black);
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;

  div {
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .text {
    height: auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      color: white;
      font-size: 50px;
      line-height: 45px;

      b {
        font-family: "Pixelify Sans", sans-serif;
        letter-spacing: 2px;
      }
    }

    button{
      width: 200px;
      margin-top: -30px;
      margin-bottom: 20px;
    }
  }

  .image {
    height: auto;
    width: 500px;

    img {
      height: 500px;
      width: 500px;
      margin-top: -150px;
    }
  }
`;
export default Benefit;
