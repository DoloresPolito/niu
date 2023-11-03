import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Pixel from "../home/Pixel";
import ios from "../assets/home/homedownload/ios.svg";
import googleplay from "../assets/home/homedownload/google-play.svg";
import { Link } from "react-router-dom";
import stain from "../assets/home/homecover/background-stain-ipad-min.png";
import phone from "../assets/home/homecover/phone-cover-min.png";
import stainmobile from "../assets/home/homecover/stain-mobile-min.png";

const Cover = () => {
  const [width, setWidth] = useState(null);
  const getWidth = () => divRef?.current?.offsetWidth;

  const divRef = useRef(null);

  const [totalWidth, setTotalWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setTotalWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <CoverSection>
        {totalWidth > 800 ? (
          <>
            <Video loop autoPlay muted>
              <source src="2gifhero-min.mp4" type="video/mp4" />
            </Video>
          </>
        ) : (
          <>
            <Hero>
              <Title>
                <h1>
                  tu billetera <br />a otro level.
                </h1>
              </Title>
              <StainContainer>
                <img
                  className="stain"
                  src={totalWidth > 455 ? stain : stainmobile}
                  alt="stain"
                />
                <img className="phone" src={phone}     alt="phone"/>
              </StainContainer>
              <Buttons>
                <Link
                  to="https://apps.apple.com/ar/app/n1u/id6446706311?l=en"
                  target="_blank"
                >
                  <img src={ios} alt="ios" />
                </Link>
                <Link
                  to="https://play.google.com/store/apps/details?id=n1u.app&pli=1"
                  target="_blank"
                >
                  <img src={googleplay} alt="googleplay" />
                </Link>
              </Buttons>
              <BottomCoins />
            </Hero>
          </>
        )}

        <CoverContainer>
          <Column1>
            <div className="title">
              <h1>
                tu billetera
                <br /> a otro level.
              </h1>
            </div>
          </Column1>

          <Column3>
            <Content>
              <div>
                <Link
                  to="https://apps.apple.com/ar/app/n1u/id6446706311?l=en"
                  target="_blank"
                >
                  <img src={ios} alt="ios" className="first" />
                </Link>
                <Link
                  to="https://play.google.com/store/apps/details?id=n1u.app&pli=1"
                  target="_blank"
                >
                  <img src={googleplay} alt="googleplay" />
                </Link>
              </div>
            </Content>
          </Column3>
        </CoverContainer>

        {totalWidth < 800 ? (
          <></>
        ) : (
          <>
            <Pixel />
          </>
        )}
      </CoverSection>
    </>
  );
};

const CoverSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  margin: 0 auto;

  /* max-height: 1500px; */
`;

const Video = styled.video`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (max-width: 990px) {
    object-fit: cover;
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;

  top: 0;
  left: 0;
`;

const StainContainer = styled.div`
  position: absolute;
  z-index: 500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;

  .stain {
    height: 80%;
    width: auto;
  }

  .phone {
    position: absolute;
    z-index: 2000;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
  }
  @media only screen and (max-width: 800px) {
    .stain {
      height: 100%;
      width: auto;
    }
  }

  @media only screen and (max-width: 635px) {
    top: 60%;
    .stain {
      display: none;
    }

    .phone {
      top: 46%;
    }
  }

  @media only screen and (max-width: 455px) {
    .stain {
      display: flex;
    }
  }

  @media only screen and (max-width: 400px) {
    height: 95%;
  }
  @media only screen and (max-width: 370px) {
    height: 90%;
  }

  @media only screen and (max-width: 345px) {
    height: 85%;
  }
`;

const Title = styled.div`
  position: absolute;
  z-index: 500;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 100%;
  justify-content: center;
  h1 {
    color: white;
    font-family: "LoRes";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    max-width: 500px;
  }
`;

const Buttons = styled.div`
  position: absolute;
  z-index: 800;
  top: 83%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  width: 400px;
  img {
    height: 50px !important;
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    img {
      height: 40px;
    }
  }
`;

const BottomCoins = styled.div`
  background-image: url("/backgrounds/coins-ipad-min.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 150px;
  width: 100%;
  bottom: 20%;
  z-index: 500;
  @media only screen and (max-width: 800px) {
    bottom: 0%;
  }
`;

const CoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: auto;
  justify-content: space-between;
  max-width: 1600px;
  z-index: 500;
  margin-top: -80px;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 480px;

  .title {
    h1 {
      color: white;
      font-family: "LoRes";
      font-size: 60px;
      font-style: normal;
      font-weight: 400;
      line-height: 60px;
      max-width: 450px;

      @media only screen and (max-width: 1145px) {
        font-size: 50px;
        max-width: 400px;
        line-height: 50px;
      }

      @media only screen and (max-width: 1145px) {
        font-size: 45px;
        max-width: 400px;
        line-height: 45px;
      }
    }

    @media only screen and (max-width: 905px) {
      font-size: 40px;
      max-width: 400px;
      line-height: 40px;
    }
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;

  .first {
    padding-right: 40px;
  }

  @media only screen and (max-width: 1100px) {}
  .first {
    padding-right: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 120px;
  max-width: 500px;
  img {
    height: 65px;
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 1300px) {
    justify-content: flex-end;
    width: 500px;
    img {
      height: 55px;
      padding-bottom: 60px;
    }
  }

  @media only screen and (max-width: 1100px) {
    img {
      height: 50px;
      padding-bottom: 90px;
    }
  }
  @media only screen and (max-width: 950px) {
    img {
      height: 45px;
      padding-bottom: 60px;
    }
  }

`;

export default Cover;
