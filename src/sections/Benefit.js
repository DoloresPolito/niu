import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import { useParams } from "react-router-dom";
import benefits from "../jsons/benefitscards.json";
import { Button } from "../styles/texts.js";
import phones from "../assets/benefits/phones.svg";

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
                {/* <CardImage src={data.image} alt="card image" /> */}
                <Logo src={data.logo} alt="logo" />
              </ImageContainer>

              <h3>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam noDuis autem vel eum iriure dolor in
              </h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam noDuis autem vel eum iriure dolor in hendrerit in vulputate
                velit esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et ac
                <br />
                <br />
                válido para xx/xx/xx al xx/xx/xx
              </h4>

              <h5>Bases y Condiciones</h5>
              {/* <h6>{data.title}</h6>
              <h6>{data.content}</h6> */}

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
              <img src={phones} alt="phones" />
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
  @media only screen and (max-width: 900px) {
    width: 85%;
  }

  h3 {
    max-width: 800px;
    color: #000;
    font-family: "Roboto", sans-serif;
    font-size: 45px;
    font-style: normal;
    font-weight: 300;
    line-height: 45px;
    letter-spacing: 1px;


    @media only screen and (max-width: 900px) {
      font-size: 35px;
      line-height: 35px;
    }
  }

  h4 {
    line-height: 20px;
    max-width: 700px;
    color: #000;
    font-family: "Roboto", sans-serif;
    font-size: 27.907px;
    font-style: normal;
    font-weight: 300;
    line-height: 31.008px;
    letter-spacing: 1px;

    @media only screen and (max-width: 900px) {
      font-size: 25px;
      line-height: 28px;
    }
  }

  h5 {
    color: #000;

    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 17.984px;

    @media only screen and (max-width: 900px) {
      font-size: 16px;
      line-height: 28px;
    }
  }

  p {
    color: #000;
    font-family: "Roboto", sans-serif;
    font-size: 18.605px;
    font-style: normal;
    font-weight: 300;
    line-height: 31.008px;

    @media only screen and (max-width: 900px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: grey;
  border-radius: 30px;
  padding-bottom: 40px;
  margin-bottom: 20px;
  position: relative;

  @media only screen and (max-width: 680px) {
    height: 300px;
    width: 100%;
    margin-bottom: 50px;
  }
`;

const Logo = styled.img`
  position: absolute;
  bottom: -15%;
  left: 5%;
  width: 15%;

  @media only screen and (max-width: 680px) {
    left: 40%;
    height: 100px;
    width: 100px;
  
  }


`;

// const CardImage = styled.img`
//   width: 100%;
//   height: 100%;
// `;

const BottomContainer = styled.div`
  background: linear-gradient(-45deg, #5c0a33, black, #5c0a33, black);
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 840px) {
    height: 300px;
  }

  @media only screen and (max-width: 670px) {
    height: 200px;
  }

  @media only screen and (max-width: 490px) {
    height: 130px;
  }

  div {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
      width: 85%;
    }
  }

  .text {
    height: auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 900;
      line-height: 49.612px;

      b {
        font-family: 'LoRes';
        color: #fff;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 49.612px;
      }

      @media only screen and (max-width: 1140px) {
        font-size: 40px;
        line-height: 40px;
        b {
          font-size: 44px;
          line-height: 44px;
        }
      }

      @media only screen and (max-width: 1060px) {
        font-size: 35px;
        line-height: 35px;
        b {
          font-size: 38px;
          line-height: 38px;
        }
      }
      @media only screen and (max-width: 590px) {
        font-size: 25px;
        line-height: 25px;
        b {
          font-size: 28px;
          line-height: 28px;
        }
      }

      @media only screen and (max-width: 490px) {
        font-size: 20px;
        line-height: 20px;
        b {
          font-size: 22px;
          line-height: 22px;
        }
      }

    }

    button {
      width: 200px;
      margin-top: -30px;
      margin-bottom: 20px;

      @media only screen and (max-width: 590px) {
        display: none;
      }
    }
  }

  .image {
    height: auto;
    width: 500px;
    display: flex;
    justify-content: flex-end;

    img {
      height: 500px;
      width: 500px;
      margin-top: -150px;

      @media only screen and (max-width: 840px) {
        height: 400px;
        width: 400px;
        margin-top: -100px;
      }

      @media only screen and (max-width: 670px) {
        height: 300px;
        width: 300px;
        margin-top: -90px;
      }

      @media only screen and (max-width: 490px) {
        height: 200px;
        width: 200px;
        margin-top: -60px;
      }
    }
  }
`;
export default Benefit;
